import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 모든 컴포넌트들은 라이프사이클을 가진다.
  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount:");
  }, []);
  // 만약 최초 렌더링시 한번만 실행시키고 싶은 컴포넌트가 있다면, deps를 빈배열로 두면 된다.
  
  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update:")
  });

  // 업데이트는 deps를 생략해준다. 이렇게 되면 콜백함수는 마운트 될 때 한번, 그리고 컴포넌트가 리렌더링될 때 마다 계속 실행된다.

  // 3. 언마운트 : 죽음

  useEffect(() => { // 첫 번째 인수로 콜백함수, 두 번째 인수로 배열을 넣어준다.
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]) // 두번째 인수인 배열의 값이 바뀌게 되면, 사이드 이펙트로 콜백함수를 실행시켜준다.
  // 의존성 배열
  // dependency array 줄여서는 deps라고 부른다.

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count = {count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton = {onClickButton} />
      </section>
    </div>
  )
}

export default App
