// Promise란? 특수한 목적을 통해 존재하는 JavaScript의 내장 객체로, 비동기 작업을 효율적으로 처리할 수 있도록 도와준다.
// setTimeout과 같은 비동기 함수(작업)들을 감싸주는 객체이다.
// Promise의 효능 : 비동기 작업 실행, 상태 관리, 결과 저장, 병렬 실행, 다시 실행 등
// 본 강의에서는 가장 기본적이고 핵심적인 3가지 기능인 [실행, 상태 관리, 결과 저장] 에 대해 집중적으로 살펴볼 것

// Promise의 3가지 상태
// 1. 대기(Pending) : 아직 비동기 작업이 진행중인, 아직 작업이 완료되지 않은 상태
// 1-2. 해결(Resolve) : 대기 -> 성공으로 잘 넘어갔을 경우
// 2. 성공(Fulfilled) : 비동기 작업이 별다른 오류 없이 성공적으로 마무리 된 상태
// 1-3. 거부(Rejected) : 대기 -> 실패로 이어졌을 경우
// 3. 실패(Rejected) : 모종의 애러(네트워크 오류, 코드 오기 등등)로 인해 비동기 작업이 실패한 상태

// 유튜브를 예시로 들면 아래와 같이 나뉜다.

//             영상 로딩중 : 대기
//                ↙️    ↘︎
// 영상 로딩 완료 : 해결 / 영상 로딩 실패 : 거부
//                ↙️    ↘︎
// 영상 시청 가능 : 성공 / 영상 시청 불가 : 실패

// 매개변수 설명 : (Promise 작업을 성공상태로 바꿔주는 함수, Promise 작업을 실패상태로 바꿔주는 함수)

function add10(num) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
        }, 2000)
    });
    
    return promise;
}

add10(0)
    .then((result) => {
        console.log(result);

        const newP = add10(result);
        return(newP)
    })
    .then((result) => {
        console.log(result);
        return add10(undefined);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error)
    });


// const promise = new Promise((resolve, reject) => {
//     // 비동기 작업 실행하는 함수
//     // executor

//     setTimeout(() => {
//         const num = 10;

//         if(typeof num === 'number'){
//             resolve(num + 10);
//         } else {
//             reject("num이 숫자가 아닙니다");
//         }
//     }, 2000);
// });


// // then 메서드
// // -> 그 후에

// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// 한번 호출된 promise객체를 위와 같이 .catch 등의 함수를 연결하여 사용할 수 있는데, 이러한 방식을 chaining이라고 한다.

// setTimeout(() => {
//     console.log(promise)
// }, 3000);

// console.log(promise)