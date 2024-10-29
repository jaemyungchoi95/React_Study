// 1, 함수 표현식
// 함수 표현식으로 만든 

function funcA() {
    console.log("funcA");
}

//함수를 함수명() 의 형태 말고 함수명만 입력하면 함수 자체가 출력된다.
//JS에서는 함수도 하나의 문자나 숫자와 같은 값으로 취급하기 때문에 함수명을 입력 시 함수의 내용 자체로 담을 수 있다.
let varA = funcA;
console.log(varA);
/* console.log(varA) 출력 결과
    funcA() {
        consloe.log("funcA");
    }
*/
//선언된 변수에 함수를 뜻하는 () 를 붙여도 호출이 가능하다. 
// varA 가 funcA의 함수 내용을 담고 있고, fucnA() 로 실행을 하면 그 안의 console.log("funcA")가 출력되는듯?
varA(); //출력결과 : funcA
funcA(); //출력결과 : funcA

//변수의 선언과 동시에 해당 함수를 바로 담아버릴 수도 있음
//아래의 경우에는 선언식으로 형성된 함수가 아니고 값으로 형성된 함수라서 위의 funcA(); 호출의 경우와는 다르게 funcB(); 호출시 작동이 안된다.
//이러한 함수를 익명함수라고 한다.
let varB = function funcB() {
    console.log("funcB");
};

varB();
/* 
funcB(); 실행 시 console에 아래의 Error 메시지가 뜬다.
Uncaught
ReferenceError: funcB is not defined
    at chapter12.js:26:1
*/

// 2. 화살표 함수 : 함수를 기존보다 더 간단하고 빠르게 활용할 수 있도록 해주는 JS 문법
let varC = () => {
    return 1;
};
console.log(varC());

//이보다 더 간단하게는 아래와 같이 구성할 수 있다. 단, 딱 하나의 값만 단순 반환할 경우
let varD = () => 2;
console.log(varD());

//매개변수가 필요할 경우 아래와 같이 작성한다.
let varD2 = (value) => value + 2;
console.log(varD2(10));

//매개변수가 필요하며, 화살표함수가 어떤 값을 즉시반환하는 것이 아니라 몇가지 추가적인 작업이 더 필요하다면
//아래와 같이 중괄호가 필요하다.
let varE = (value) => {
    console.log(value);
    return value+1;
};
console.log(varE(10));
