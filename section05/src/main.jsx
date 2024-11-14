import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const Hello = () => {
//     return <div>hello</div>;
// };
// 위와 같이 직접 입력을 통해 root를 변경하는 것도 가능하지만, 대부분의 리액트 개발자들은 관례상 App 컴포넌트를 root로 사용한다.

createRoot(document.getElementById('root')).render(

    <App />

);
