import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // createRoot 메서드 : 인수로 전달받은 HTML 요소를 React의 root(뿌리) 로 만들어주는 역할.
  // index.html 파일 내에 <div id="root"></div> 요소를 불러오고 있다.
  // render라는 메서드를 호출해서 App 이라는 것을 렌더링 한다. (import App from './App.jsx')
  // 쉽게말하면 컴포넌트를 렌더링 해주는 메서드
  <StrictMode>
    <App /> 
  </StrictMode>,
)
