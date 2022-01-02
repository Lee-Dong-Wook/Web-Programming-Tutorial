'user strict';

//Javascript is synchronous
//Execute the code block by order after hoisting.
//hoisting : var, function declaration

console.log('1');

//setTimeout(function() { console.log(' callback 2'); }, 1000);

//화살표 함수를 이용하여 간략하게 구성가능
setTimeout(() => console.log(' callback 2'), 1000);
console.log('3');

//setTimeout 은 브라우저에서 제공하는 webAPI
//콜백함수를 부르고, 특정 시간을 받는 매개변수가 있다.

//콜백함수
//특정 기능을 수행하는 함수를 등록하면 나중에 불러줘야하는 함수


//Synchronous callback

//print라는 가상의 콜백함수를 받아 출력하는 함수
function printImmediately(print) {
    print();
}

//자바스크립트는 어떤 타입을 인자로 받는지 몰라 어떤 리턴타입인지 모름
//hello를 출력하는 콜백함수를 인자로 넣기
//함수정의 시 매개변수를 print로 하니 실제 사용할 때 콜백함수 종류를 print라고 작성되는구나
printImmediately(() => console.log('hello'));

//Asynchronous callback

//setTimeout을 wrapping하는 함수
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);

//콜백 지옥 예시
class UserStorage{
    //로그인
    //onSuccess, onError는 로그인 성공, 실패에 대한 콜백함수
    loginUser(id, password, onSuccess, onError){
        setTimeout(
            //id, pw 입력
            //id, pw가 맞으면 onSuccess 콜백호출, 틀리면 onError 콜백호출
            () => {
                if((id ==='ellie' && password ==='dream') ||
                    (id === 'coder' && password === 'academy')){
                    onSuccess(id);
                }
                else{
                    onError(new Error('not found'));
                }
            }, 2000);
    }

    //로그인 성공 시 사용자 권한가져오기
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
                if(user === 'ellie'){
                    onSuccess({name: 'ellie', role: 'admin'});
                }
                else{
                    onError(new Error('no access'));
                }
            } ,1000);
    }
}


//1. id, password 입력
const userStorage = new UserStorage();

//브라우저 API : prompt()
const id = prompt('enter your id');
const password = prompt('enter your password');

//2. login 수행
userStorage.loginUser(
    id,
    password,
    //onSuccess 에 해당 하는 콜백함수
    //로그인이 되었다면 다시 사용자의 role을 받아오는 콜백함수를 호출한다.
    user => {
        //3. login 성공 시 role 획득
        userStorage.getRoles(
            user,
            userWithRole => {
                //4. role에 해당하는 내용 출력
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {console.log(error)}
            );
    },
    error => {console.log(error)}   //onError 에 해당 하는 콜백함수
);

