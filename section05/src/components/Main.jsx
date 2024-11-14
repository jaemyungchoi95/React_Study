// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// {if(){}}, {for(){}} 이러한 조건문이나 반복문은 그 자체로 값으로 평가될 수 없기 때문이다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// const obj = {a : 1}; 와 같은 객체를 선언하고 {obj}로 출력하면 오류는 나지않지만 출력 불가능.
// 하지만 {obj.a} 와 같은 형식으로 특정 값을 지정해주면 정상적으로 출력이 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다. <main>과 같은 태그가 바로 최상위 태그

// const number = 9;
// const obj = {a : 1};
// <main>
//     <h1>main</h1>
//     <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
//     {10}
//     {number}
//     {[1, 2, 3]}
//     {true}
//     {obj.a}
// </main>

// 아래와 같이 HTML 태그에 직접 style = {{ }} 를 통해 직접 CSS를 부여하는 방법도 있지만 선호되는 방식은 아니다.
// return <div
// style = {{
//     backgroundColor: "red",
//     borderBottom: "5px solid blue"
// }}>로그아웃</div>
// } else {
// return <div>로그인</div>
// };

// Main 컴포넌트가 조건에 따라 다른 UI를 렌더링 하도록 한다.
import "./Main.css"

const Main = () => {

    const user = {
        name: "이정한",
        isLogin: true,
    };

    if(user.isLogin) {
        return <div className="logout">로그아웃</div>
    } else {
        return <div>로그인</div>
    };


    // return (
    //     <>
    //         {/* {user.isLogin ? (
    //             <div>로그아웃</div>
    //         ) : (
    //         <div>로그인</div>
    //         )} */}
    //     </>
    // );
}

export default Main