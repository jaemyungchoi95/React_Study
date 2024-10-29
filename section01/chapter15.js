//객체(Object)란? : 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함
// 1. 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성) -> key : value
// key에는 문자열아니 숫자만 올 수 있다. 다만, 띄어쓰기가 포함된 문자열을 key로 사용하려면 쌍따옴표를 붙여야 함.
let person = {
    name: "이정한", // key : name , value : "이정한"
    age:27, //key : age , value : 27
    hobby:"테니스", // key : hobby , value : "테니스"
    job: "FE Developer",
    extra: {}, //value에 객체가 와도 된다.
    10: 20,
    "like cat": true
}

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근하는 방법
let name = person.name;
/* console.log(name); //중간선이 그어지는 이유는 typescript의 제약사항을 표기하는 것이다.
console.log(agee); //존재하지 않는 프로퍼티를 입력하면 undefined 오류가 뜬다. */

//두번째 접근 방식 - 괄호표기법 : ["문자열 키"], 반드시 쌍따옴표와 함께 문자열로 작성해야 한다.
let age = person["age"];

//두번째 접근방식 응용하여 아래와 같이 할 수 있음. 동적으로 프로퍼티를 변화시키면서 꺼내오는 경우 괄호표기법이 좋다.
//먼저 key를 문자로 담은 변수를 만들고 해당 변수를 [변수명] 입력하면 결국 "문자열" 이 되는것이기 때문에 가능한듯?
let property = "hobby";
let hobby = person[property];

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "fe-developer";
person["favoriteFood"] = "떡볶이";

// 3-3. 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
//result 에 쓰인 문자열이 person객체에 있으면 true, 없으면 false를 반환한다.

console.log(result2);