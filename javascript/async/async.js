'user strict';

console.clear();
//1. async
// function fetchUser() {
//
//     return new Promise((resolve, reject) => {
//         // do network request in 10 secs...
//
//         resolve('ellie');
//     });
// }
//
// const user = fetchUser();
// user.then(user => console.log(user));
// console.log(user);


async function fetchUser() {

    return 'ellie';
}

const user = fetchUser();
user.then(user => console.log(user));
console.log(user);

//2. await

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return "apple";
}

async function getBanana() {
    await delay(1000);
    return "Banana";
}

//  function getBanana() {
//     return delay(3000)
//         .then(() => "Banana");
// }

//사과와 바나나를 같이 따는 함수
//콜백 지옥이 된다.
// function pickFruit(){
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }
// pickFruit().then(console.log);

// async function pickFruit() {
// const apple = await getApple();
// const banana = await getBanana();
// return `${apple} + ${banana}`;
// }

// async function pickFruit() {
//
// const applePromise = getApple();
// const bananaPromise = getBanana();
// const apple = await applePromise();
// const banana = await bananaPromise();
//
// return `${apple} + ${banana}`;
// }
// pickFruit().then(console.log);

//3. userful APIs
function pickAllFruit() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}
pickAllFruit().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);