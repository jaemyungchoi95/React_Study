// 배열 메서드 1. 요소 조작
// 6가지의 요소 조작 메서드

// 1. push : 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7); //요소가 추가되고 난 후의 배열의 길이 반환
// console.log(arr1);
// console.log(newLength);

// 2. pop : 배열의 맨 뒤에있는 요소를 제거하고 해당 요소를 반환하는 메서드
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
// console.log(poppedItem);
// console.log(arr2);

// 3. shift : 배열에서 맨 앞에있는 요소를 제거하고 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem, arr3);

// 4. unshift : push와 반대로 배열의 가장 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); //요소가 추가되고 난 후의 배열의 길이 반환
// console.log(newLength2, arr4);
// shift와 unshift는 맨 앞에서 요소를 추가하거나 제거하기 때문에 리소스 소요가 많다.
// 왠만하면 push와 pop으로 하는 것이 좋다.

// 5. slice : 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); //끝부분은 지정된 인덱스의 바로 전까지를 잘라내기 때문에 +1을 해서 기재해줘야 한다.
let sliced2 = arr5.slice(2); //배열의 앞에서부터 자르면 양수
let sliced3 = arr5.slice(2); //배열의 뒤에서부터 자르면 음수

// console.log(sliced3);

// 6. concat : 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatArr = arr6.concat(arr7);

console.log(concatArr);