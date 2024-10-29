// 1. 변수 (let : 변수 유형 , age : 변수명 , 27 : 초기화된 변수 숫자 -> 변수는 초기값을 주지 않고 초기화만 하는 것도 가능하다.)
let age;
// console.log(age);

age = 30;
// console.log(age);

// 선언된 코드는 중복해서 다시 선언할 수 없다.
// let age = 40;

// 2. 상수 : 변수와 달리 한번 저장된 값을 다시는 바꿀 수 없다.
const birth = "1997.01.07";

// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. 변수명에는 $, _ 를 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 변수의 이름은 숫자로 시작할 수 없다.
let name1;
let _1name; // 부득이하게 숫자를 앞에 사용할 경우 $1name, _1name 등의 형태로 써야한다.

// 3-3. 예약어를 변수명으로 사용할 수 없다.
// let if; , let let; 등의 선언은 불가능함

// 4. 변수명명 가이드
// 좋지 않은 예시 (다른사람이 보면 무슨 기능인지 모름)
// let a = 1;
// let b = 1;
// let c = a - b;
// console.log(c);

// 좋은 예시
// let salesCount = 1;
// let refundCount = 1;
// let totalSalesCount = salesCount - refundCount;