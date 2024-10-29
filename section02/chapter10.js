// Date 객체와 날짜
// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 -> 현재 시간을 저장하는 date 객체
// console.log(date1);
let date2 = new Date("1997-01-07"); //보통 연월일을 구분할때 - 혹은 .  혹은 / 를 쓰는데 편한대로 쓰면 된다.
// console.log(date2);

// 2. 타임스탬프 : 특정 시간이 "1970.01.01 00시 00분"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// "1970.01.01 00시 00분" 을 UTC (협정세계시) 라고 부른다.
let ts1 = date1.getTime();

let date4 = new Date(ts1);
// console.log(date1);
// console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();

let hour = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();
/* 
console.log(
    year, month, date, hour, minutes,seconds
);
*/

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); //자바스크립트는 0부터 새기때문에 3월로 바꾸고싶으면 2를 입력
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포멧으로 출력하기
console.log(date1.toDateString()); // 날짜까지만 출력
console.log(date1.toLocaleString()); //우리나라에 맞도록 현지화된 날짜 출력