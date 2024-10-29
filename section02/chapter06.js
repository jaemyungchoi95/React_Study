// 반복문으로 배열과 객체 순회하기
// 순회(Iteration)이란? : 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함
/* 예시
    배열 순회 : let numbers = [1, 2, 3];
    객체 순회 : let person = {
                name: "이정환",
                age: 27,
                hobby: "테니스",
            };

    이번 시간에는 반복문을 통해 어떻게 객체를 순회할 수 있는지 살펴볼 것
    * 반복문을 이용한 배열, 객체 순회
    for (let value of numbers) {
        console.log(value);
    }
    for (let key in Object.keys(person)) {
        console.log(key);
    }
*/

// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1. 배열 인덱스
for (let i = 0 ; i < arr.length ; i++) {
    // console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for(let i = 0 ; i < arr2.length ; i++) {
    // console.log(arr2[i]);
}

// 1-2. for of 반복문 : 오직 배열을 순회하기 위해서만 존재하는 특수한 반복문
// of 뒤어있는 배열을 하나씩 순회하여 of 앞에있는 변수에 하나씩 저장한다.
for (let item of arr2) {
    // console.log(item);
}

// 2. 객체 순회
let person = {
    name: "이정한",
    age: 27,
    hobby: "테니스",
};

// 2-1. Object.keys 사용 (Object의 내장 함수)
// -> 객체에서 key값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for(let key of keys) {
    const value = person[key];
    // console.log(key, value);
}

// 2-2. Object.values 사용 (Object의 내장 함수)
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환

let values = Object.values(person);

for (let value of values) {
    // console.log(value);
}

//2-3. for in : 객체만을 위해 존재하는 특별한 반복문 (for in 과 유사함)
for (let key in person) {
    const value = person[key];
    console.log(key, value);
}
