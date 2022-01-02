'user strict';

console.clear()

//Promise is a JavaScript object for asynchoronous operation.
//비동기 작업을 위해 콜백함수 대신 유용하게 사용가능한 Object

//Promise 구성
//State : 특정동작을 수행여부에 대한 상태
    // - 동작수행상태 : peding
    // - 동작수행완료 : fulfilled
    // - 돟동작수행실패 : rejected
//Producer vs Consumer : 정보를 제공해주는 것과 사용하는 것

//1. Producer
//Promise 객체를 생성하는 순간 executor 라는 콜백함수가 바로 실행되는 것을 확인할 수 있다.
//만약 promise 안에 네트워크 통신 코드가 있는 경우 바로 네트워크 통신 수행한다.

// * 주의, 사용자 요청(ex) 버튼클릭 등)이 있어야 네트워크 요청을 수행할 때 아래 방법은
// 옳바르지 않다.

// const promise = new Promise((resolve, reject) =>{
//     // doing some heavy works(network, read files..)
//     console.log('doing something...');
// });

//네트워크 통신하는 것처럼 setTimeout 적용
const promise = new Promise((resolve, reject) =>{
    // doing some heavy works(network, read files..)
    console.log('doing something...');

    setTimeout(() => {
        //기능 수행이 완벽하다. resolve() 수행
        //네트워크 통신 후 원하는 데이터를 resolve를 통해 전달
        //현재 promise는 2초간 기능을 수행하여 완벽하게 처리 후 ellie 라는 결과값을
        //resolve를 통해 전달한다.
        //resolve('ellie');
        reject(new Error('no networks....'));
        },2000);
});

//2. Consumer : then, catch, finally
//promise에 문제가 없다면 값을 받아와 일을 수행한다.
promise.then(value => {
   console.log(value);
})
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num *2)
.then(num => num *3)
.then(num => {
   return new Promise((resolve, reject) =>{
       setTimeout(() => resolve(num -1), 1000);
       });
})
    .then(num => console.log(num));