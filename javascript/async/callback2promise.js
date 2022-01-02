'user strict';

console.clear();
//콜백 지옥 예시
class UserStorage{
    //로그인
    //onSuccess, onError는 로그인 성공, 실패에 대한 콜백함수
    loginUser(id, password){

        return new Promise((resolve, reject) => {
            setTimeout(
            //id, pw 입력
            //id, pw가 맞으면 onSuccess 콜백호출, 틀리면 onError 콜백호출
            () => {
                if((id ==='ellie' && password ==='dream') ||
                    (id === 'coder' && password === 'academy')){
                    resolve(id);
                }
                else{
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    //로그인 성공 시 사용자 권한가져오기
    getRoles(user){

        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if(user === 'ellie'){
                    resolve({name: 'ellie', role: 'admin'});
                }
                else{
                    reject(new Error('no access'));
                }
            } ,1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// userStorage.loginUser(id, password)
//     .then(user => userStorage.getRoles(user));
userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);





