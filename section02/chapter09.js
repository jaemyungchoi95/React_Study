// 배열 메서드 3. 변형
// 5가지 배열 변형 메서드
// 1. filter : 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
    { name: "이정환", hobby: "테니스" },
    { name: "김효빈", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },
];
/* 일반 형태
const tennisPeople = arr1.filter((item) => {
    if(item.hobby === "테니스") return true;
}); 
*/

/* 조건식만 반환하도록 단순회
const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
 */
// console.log(tennisPeople);

// 2. map : 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고, 각각 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr)=>{
    return item*2;
});
// console.log(mapResult);

let names = arr1.map((item) => item.name);

// console.log(names);

// 3. sort : 배열을 사전순으로 정렬하는 메서드 / 하지만 문자열이 아닌 숫자를 입력하면 정상적으로 작동하지 않는다.
let arr3 = ["b", "a", "c"];
arr3.sort((a, b) => {
    if(a > b) {
        //b가 a앞에 와라
        return 1; // -> b, a 배치
    } else if (b > a) {
        //a가 b 앞에 와라
        return -1; // -> a, b 배치
    } else {
        //두 값의 자리를 바꾸지 마라
        return 0; // a,b 자리를 그대로 유지
    }
});

// console.log(arr3);

// 4. toSorted(가장 최근에 추가된 최신 함수) : sort와 차이점은 정렬된 새로운 배열을 반환하는 메서드라는 것
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// console.log(arr5);
// console.log(sorted);

// 5. join : 배열의 모든 요소를 하나의 문자열로 합쳐서 변환하는 메서드
let arr6 = ["hi", "im", "winterlood"];

const joined = arr6.join(" "); //기본적으로 , 구분자가 생기는데 구분자를 바꿔주고 싶다면 ("원하는 구분자") <- 공백, - 등 원하는것 가능
console.log(joined);