// 1. 상수 객체 : 말그대로 상수에 저장해놓은 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

//상수는 저장된 값을 다시는 바꿀 수 없다고 하지만, 상수 객체에 새로운 프로퍼티를 추가하거나 기존 객체의 값을 수정하거나 삭제하는 행위는 가능하다.
//상수의 변수 자체를 수정하는 것이 안되는 것이고 내부에 속해있는 프로퍼티를 수정하는 것은 전혀 문제되지 않음.
animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제

// 2. 메서드
// -> 값(value)이 함수인 프로퍼티를 말함
// 화살표함수와 메서드 선언을 통해 만들 수도 있음
const person = {
    name : "이정한",
    /* 기본형
        sayHi: function() {
        console.log("안녕!");
    }
    */
    
    /* 화살표 함수
    sayHi: () => {
        console.log("안녕!");
    }
    */

    sayHi() {
        console.log("안녕!");
    }
};

person.sayHi();
person["sayHi"]();