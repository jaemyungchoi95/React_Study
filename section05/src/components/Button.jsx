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
    return (
        <button style = {{color: color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

export default Button;