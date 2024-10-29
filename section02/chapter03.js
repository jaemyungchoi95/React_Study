// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

/* 인덱스 하나씩 할달할 경우...
let one = arr[0];
let two = arr[1];
let three = arr[2];
 */

let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
    name : "이정환",
    age: 27, 
    hobby: "테니스",
};

//배열의 구조 분해 할당과 유사하지만, 대괄호 대신 중괄호를 사용하는 것이 다르다.
let {name, age : myAge, hobby, extra = "hello"} = person;
//기존 age라는 프로퍼티의 값을 새로운 변수명에 담고싶으면 age:myAge 와 같은 형태로 쓴다.
// console.log(name, myAge,hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby,extra);
}

func(person);