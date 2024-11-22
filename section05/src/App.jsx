import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Main from './components/main';
// import Button from './components/Button';
import { useState } from 'react';
// import Bulb from './components/Bulb';
// import Counter from './components/Counter';
import Register from './components/Register';
import HookExam from './components/HookExam';

// 기본적인 함수 컴포넌트 외에도 아래와 같이 화살표 함수로 컴포넌트를 만들 수 있다.
// export const Header = () => { // 자식 컴포넌트
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

// Header 컴포넌트처럼 다른 컴포넌트의 내부에 포함되어 렌더링 되는것을 자식 컴포넌트라고 한다.

// HTML 태그를 반환하는 함수를 컴포넌트라고 한다.
// 함수 컴포넌트/ 함수 선언식으로 컴포넌트를 만들 수도 있고

// 만약 Button에 넣어줄 전달값이 많다면  아래와 같이 객체를 선언하여 사용해줄 수 있다.
// Button {...buttonProps} /> 와 같이 컴포넌트에 기재하여 사용
// const buttonProps = {
//   text: "메일",
//   color: "red",
//   a: 1,
//   b: 2, 
//   c: 3
// };

// props는 일반적인 자바스크립트값 뿐만 아니라, HTML이나 리액트 컴포넌트도 전달할 수 있다.
// <Button text = {"블로그"}> <div>자식요소</div> </Button> 이런식으로 쓰면 <div>는 children 즉 자식요소로 전달된다.

{/* <Header />
<Main />
<Footer />
<Button text = {"메일"} color ={"red"} />
<Button {...buttonProps} />
<Button text = {"카페"} color={"blue"}/>
<Button text = {"블로그"} color = {"black"}>
  <div>자식요소</div>
  <Header></Header>
</Button> */}

function App() { // 부모 컴포넌트
  

  return (
    <>
      <HookExam />
    </>
  )
}
;
// 모든 컴포넌트들은 App 컴포넌트의 자식으로서 존재해야 하고 App 컴포넌트는 모든 컴포넌트의 조상 개념이 된다. (root 컴포넌트라고 부름)

export default App