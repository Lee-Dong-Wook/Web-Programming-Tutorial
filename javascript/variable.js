'use strict';

// 변수 Variable
// let(added in ES6)
// 요즘 ES6 이전의 문법은 잘사용하지 않음

// global scope 변수 선언
let name = 'raynor';
console.log(name);

name = 'sara';
console.log(name);

//block scope 변수 선언
{
    let block_name = "tycers";
    console.log(block_name);
}
//블럭 범위 외의 변수는 사용할 수 없다.
// 정의 되지 않았다고 출력
//console.log(block_name);

//ES6 이전 변수 선언방법(사용하지 않기)
var age;

//constants
//선언 후 값을 변경할 수없음
//immutable 데이터 타입을 사용하는 경우
    //security
    //thread safety
    //reduce human mistakes
//mutable vs immutalbe

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number -special numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(`value: ${infinity}, type: ${typeof infinity}`);
console.log(`value: ${negativeInfinity}, type: ${typeof negativeInfinity}`);
console.log(`value: ${nAn}, type: ${typeof nAn}`);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);


//boolean
//false : 0, null, undefined, NaN, ''
//true: any other value

const canRead = true;
const test = 3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
let y = undefined;
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3 === symbol4);

//출력 에러발생
//console.log(`value: ${symbol3}, type: ${typeof symbol3}`);
console.log(`value: ${symbol4.description}, type: ${typeof symbol4}`);

//object, real-life object, data structure
const ellie = {name: 'ellie', age:20};
ellie.age = 21;


let date = new Date();
