// math 모듈

// CJS를 사용할 경우
// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// module.exports = {
//     add : add, // 이렇게 현재 함수의 이름: 외부에서 사용할 함수 이름을 적어주면 되지만
//     sub,       // 만약 동일하게 사용할 예정이라면 왼쪽과 같이 표기해도 문제가 없다.
// };

// ES Module을 사용할 경우
// 아래의 경우들과 같이 사용할 수 있다.
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

//es모듈을 사용할때는 가장 기본이 되는 함수를 지정해줄 수 있다.
export default function multifly(a, b) {
    return a * b;
}

