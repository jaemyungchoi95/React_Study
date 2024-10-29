// 1. Falsy한 값 (아래의 7가지 값들은 조건문에서는 거짓으로 평가가 된다.)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6  = "";
let f7 = 0n;

/* if(!f4) {
    console.log("falsy");
} */

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값 (조건문에서 참으로 평가되는 값)
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용사례

function printName(person) {
    /* if(person === undefined || person === null) { */
    if(!person) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = {name: "이정환"};
printName(person);