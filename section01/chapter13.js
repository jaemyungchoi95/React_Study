// 1. 콜백함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미 함
function main(value) {
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

function sub() {
    console.log("i am sub");
}

main(sub); //다른 함수에 매개변수로서 전달되는 함수를 callback 함수라고 한다.
//메인함수는 전달되어있는 callback 함수를 원하는 때에 실행시킬 수 있다.

//위의 경우처럼 선언해서 쓰지 않고 아래와 같이 함수안에 넣어서 쓸 수도 있다.
/* main(function() {
    console.log("i am sub");
}) */

// 2. 콜백함수의 활용
function repeat(count, callback) {
    for(let idx = 1 ; idx<=count ; idx++) {
        callback(idx);
    }
}

repeat(5, function(idx) {
    console.log(idx);
});

repeat(5, function(idx) {
    console.log(idx * 2);
});

repeat(5, function(idx) {
    console.log(idx * 3);
});