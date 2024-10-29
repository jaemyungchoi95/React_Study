// 배열 메서드 2. 순회와 탐색
// 5가지 요소 순회 및 탐색 메서드

// 1. forEach : 배열의 모든 요소를 순회하면서, 각각의 요소애 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function(item, idx, arr) {
    // console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});
// console.log(doubledArr);

// 2. includes : 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

// console.log(isInclude);

// 3. indexOf : 특정 요소의 index(위치)를 찾아서 반환하는 메서드 (단순한 원시 타입)
// indexOf는 원시타입 말고 객체타입을 저장한 배열의 위치는 찾을 수 없다. -> 기본적으로 얕은비교를 기반으로 연산하기 때문이다.
let arr3 = [2, 2, 2];
let index = arr3.indexOf(1); // 찾고자 하는 값이 존재하지 않으면 -1 값을 반환

// console.log(index);

// 4. findIndex (복잡한 객체 타입)
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 index(위치)를 찾아서 반환하는 메서드
// 탐색시간이 길지만 객체타입의 위차를 찾을 수 있기때문에 사용한다. -> 특정 프로퍼티를 찾을 수 있음.
let arr4 = [1, 2, 3];
/* 
const findIndex = arr4.findIndex((item) => {
    if(item % 2 !== 0) return true;
}); 
위의 식을 화살표 함수를 사용하면 아래와 같이 더 단축시킬 수 있다.
*/
const findIndex = arr4.findIndex((item) => item % 2 !== 0);

// console.log(findIndex);

// 5. find : 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
        {name: "이정환"},
        {name: "홍길동"},
];

const finded = arr5.find(
    (item) => item.name === "이정환"
);

console.log(finded);