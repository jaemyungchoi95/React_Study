// function add(a, b, callback) {
//     setTimeout(() => {
//         const sum = a + b;
//         console.log(sum);
//     }, 3000);
// }

// add(1, 2, (value) => {
//     console.log(value)
// });

// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function coolDownFood(food, callback) {
    setTimeout(() => {
        const coolDownedFood = `식은 ${food}`
        callback(coolDownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`
        callback(freezedFood);
   }, 1500);
}

orderFood((food) => {
    console.log(food)

    coolDownFood(food, (coolDownedFood) => {
        console.log(coolDownedFood);
        
        freezeFood(coolDownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
})

// 이전 콜백함수의 결과값을 다시 다른 콜백함수의 입력값으로 활용하다보면 들여쓰기(indent)가 너무 깊어질 수 있다.
// 그래서 이러한 방식으로 지속적으로 작업한다면 작업이 추가될때마다 가독성이 더욱 떨어질 것이다...
// 콜백지옥이라고 부르는 이러한 상황을 피하기 위해 Promise라는 비동기작업을 도와주는 객체를 통해 해소할 수 있다.