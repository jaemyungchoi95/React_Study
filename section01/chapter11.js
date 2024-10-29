// 함수선언 : 함수를 실행했을 때 어떤 동작들을 수행할 것인지 미리 만들어 놓는 것

/* function greeting() {
    console.log("안녕하세요");
}

//함수 호출 시에는 반드시 소괄호와 함께 함수명을 기재해야 한다.
console.log("호출 전");
greeting();
console.log("호출 후"); */


let area1 = getArea(10,20);
console.log(area1);

let area2 = getArea(30,20);
console.log(area2);

// getArea(10, 20); //인수
// getArea(30, 20);
getArea(120, 200);

//호이스팅 -> 끌어올리다는 뜻. / 함수의 내용이 호출보다 아래에 있어도 오류가 나지 않고 실행될 수 있도록 끌어올려주는 기능을 해준다.

// 값을 가변으로 주려면 함수의 변수타입 말고 이름만 주면 된다.
function getArea(width, height) { //여기에 들어가는 것은 매개변수라고 한다. 아래 주석처리 해놓은 것과 같이 변수선언 필요 x
    // let width = 10;
    // let height = 20;
    let area = width * height;


    //js는 함수 내에 또다른 함수를 만들 수 있다. 이를 중첩함수라고 한다.
    function another() {
        console.log("Another");
    }
    another();

    // console.log(area);
    return area; //반환값 : 함수호출의 결과값
}