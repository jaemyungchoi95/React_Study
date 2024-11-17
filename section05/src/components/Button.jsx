// 기본적으로 아래와 같이 props를 이용하여 값을 전달할 수 있다.
// const Button = (props) => {
//     console.log(props)
//     return (
//         <button style = {{color: props.color}}>
//             {props.text} - {props.color.toUpperCase()}
//         </button>
//     );
// };
// 하지만 아래와 같이 구조분해할당 형식을 객체를 전달하면 구지 점 표기법을 사용할 필요가 없다.

const Button = ({text, color, children }) => {
    // 이벤트 객체 : 리액트에서 발생하는 모든 이벤트(클릭, 마우스엔터 등등)들은 이벤트함수를 호출하면서
    // 매개변수로 이벤트 객체라는 것을 제공한다.
    // 화살표함수의 ()부분에 e라는 매개변수를 선언하고 이것을 출력하면 SyntheticBaseEvent라는 객체가 출력
    // 합성 이벤트 객체라는 뜻
    // 합성 이벤트란? : 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
    // 다양한 브라우저기 있는데, 이들 모두 사양이 다르기 때문에 Cross Browsing Issue가 발생할 수 있다.
    // SyntheticBaseEvent는 이러한 이슈를 손쉽게 해결하도록 도와준다.
    const onClickButton = (e) => {
        console.log(e)
        console.log(text)
    }

    return (
        <button 
        onClick={onClickButton}
        // onMouseEnter={onClickButton} 마우스를 가져다 대면 효과가 발생한다.
        // onClick={() => {
        //     console.log(text)
        // }}
        style = {{color: color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

export default Button;