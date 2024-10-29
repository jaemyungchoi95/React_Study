//자료형(Type)은 집합이다.
// 1. NumberType
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; //양수의 무한대
let mInf = -Infinity; //음수의 무한대

let nan = NaN; //Not a Number임
// console.log(1 * "hello");

// 2. String Type (문자열)
let myName = "최재명"; //문자열을 만들때는 반드시 작은따옴표나 쌍따옴표를 추가해야 한다.
let myLocation = "목동";
let introduce = myName + myLocation;

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; //백틱으로 문자열을 만들게 되면 변수의 값을 동적으로 추가시킬 수 있다.
// 템플릿 리터럴 문법
// console.log(introduceText);

// 3. boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type : 어떠한 변수에 아무런 값도 담겨있지 않음을 뜻한다.
let empty = null;

// 5. Undefined Type : 특수한 타입이다. null과의 차이점 : undefined는 자동으로 들어가있는 값이고, null은 개발자가 직접 넣어줘야 하는 값이다.
let none;

// console.log(none);