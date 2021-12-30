'use strict';

//1. String concatenation
console.log('my'+ ' cat');
console.log('1'+ 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log(`string literals: 
'''
1 + 2 = ${1 + 2}`);

console.log("ellie\'s \n\t book ");

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(1 % 1); //remainder
console.log(1 ** 1); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

//4. Assignment operators;
// let x = 3;
// let y = 6;
//
// x += y;
// x -= y;
// x *= y;
// x /= y;

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

// 6. Logical operators: || (or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or : ${value1 || value2 || check()}`);

// && (and), finds the first flasy value
console.log(`and : ${value1 && value2 && check()}`);

function check() {
    for(let i = 0; i<10; i++){
        console.log('a');
    }
    return true;
}

//often used to compress long if-statement
//null check
//nullableObject && nullableObject.somthing
//null이 아닐 때만 뒤의 something을 받아올 수 있다.

// if(nullableObject != null){
//     console.log( nullableObject.somthing);
// }

//! (not)
console.log(!value1);

//7. Equality
console.log('equality');
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
 console.log(stringFive == numberFive);
 console.log(stringFive != numberFive);

 // == strict equality, no type conversion
 console.log(stringFive === numberFive);
 console.log(stringFive !== numberFive);


 //equality - puzzler
console.log("equality - puzzler");
console.log(0 == false); //0, null, empty string -> false로 간주 // T
console.log(0 === false); // 0은 boolean 타입은 아님 // F
console.log('' == false); // T
console.log('' === false); // F
console.log(null == undefined); //T
console.log(null === undefined); // 값지만 타입은 다름 // F

//8. Conditional operators : if
// if, else if, else
const name = 'df';

if(name === 'ellie'){
    console.log('welcom, ellie!');
}

else if(name === 'coder'){
    console.log('you amazing');
}
else{
    console.log('unkown');
}

//9. Ternary operator : ?
// conmdition ? value1 : value2;
console.log(name === 'ellie'? 'yes' : 'no');

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';

switch (browser) {
    case "IE":
        console.log('no');
        break;
    case "chome":
        console.log('yes');
        break;
    default:
        break;
}

//11. Loops
//while loops, while the conditions is truthy,
//body code is excuted

let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
do{
    console.log(`do while: ${i}`);
    i--;
}while(i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i< 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i< 0; i--){
    // inline variable declaration
    console.log(`for: ${i}`);
}

//nested loops
for(let i = 0; i<10; i++){
    for(let j =0; j< 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}
