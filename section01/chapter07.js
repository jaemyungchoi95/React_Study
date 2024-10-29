// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
++num8;
num8++;

// 5. 논리 연산자
let or = true || false; //두개의 값 중에서 하나만 참이면 참으로 본다.

let and = true && false; //두개의 값이 모두 true여야 참으로 본다.

let not = !true;

// 6. 비교 연산자
let comp1 = 1 === "1"; //동등 비교 연산자
let comp2 = 1 !== 2; //비동등 비교 연산자
// == 두개만 써서 비교하면 값 자체로만 비교한다. === 세개를 쓰면 자료형까지 비교하기 때문에 === 으로 비교하는 것이 권장된다.

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
