// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "이정환",
                id: "winterlood"
            })
        }, 1500);
    });
}

// console.log(getData());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    const data = await getData(); // async 안에서 await를 쓸 경우 .then 등을 쓸 필요가 없이 프로미스 함수가 전부 수행될때까지 기다려준다.
    console.log(data); // setTime 시간이 지난 후 반환되는 데이터를 받아서 const로 선언된 data 변수에 담아준다.
}

printData();