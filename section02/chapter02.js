//단락평가? : && 나 || 의 논리연산에서 첫번째 단락의 결과로 연산결과를 확정할 수 있다면 두번째 연산자에는 접근조차 하지 않는 것을 말한다.
/* 예시
let varA = false;
let varB = true;

// AND 연산자
console.log(varA && varB);

// OR 연산자
console.log(varB || varA);

*/
/* 
function returnFalse() {
    console.log("False함수")
    return undefined;
}

function returnTrue() {
    console.log("True함수")
    return 10;
}

console.log(returnFalse() && returnTrue());
 */
//딘릭퍙기 활용사례

function printName(person) {
/*     if(!person){
        console.log("person에 값이 없음");
        return;
    }

    console.log(person.name);
*/
const name = person && person.name;
console.log(name || "person의 값이 없음");
}

printName();
printName({name: "dlwjdghks"});