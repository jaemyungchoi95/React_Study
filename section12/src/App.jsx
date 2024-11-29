import './App.css'
import { useReducer, useRef, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'
import { useEffect } from 'react'
import { useState } from 'react'

function reducer(state, action) {
  let nextState;

  switch(action.type) {
    case "INIT":
      return action.data;

    case "CREATE":
      { nextState = [...state, action.data];
        break;
      };
    case "UPDATE":
      { nextState = 
        state.map((item) => 
          String(item.id) === String(action.data.id) ? action.data : item);
        break;
      };
    case "DELETE":
      { nextState = 
        state.filter((item) => String(item.id) !== String(action.id));
        break;
      }
    default:
      return state;
  };
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
};

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  // 페이지의 로딩 여부를 판단하는 State
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef();

  // deps를 일부러 빈 배열로 놓고 localStorage의 값을 마운트 시 한번만 불러오도록 설정해준다.
  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    // 만약 storedData가 false하다면 즉, undefined나 null이라면 useEffect의 callback 함수를 즉시 종료하도록 return 추가
    if(!storedData) {
      setIsLoading(false);
      return ;
    }
    const parsedData = JSON.parse(storedData);
    // 먄약 parsedData가 배열이 아니라면 return 되도록 조건문을 이용하여 예외처리 해주어야 한다.
    // 이 때, 배열인지 아닌지 확인하기 위해 내장함수인 Array.isArray() 를 사용해주면 된다. 배열일 경우 true, 아니면 false를 반환해준다.
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return ;
    }

    // 로컬스토리지에 저장된 id의 최대값을 찾기 위한 과정
    let maxId = 0;
    parsedData.forEach((item) => {
      if(Number(item.id) > maxId) {
        maxId = Number(item.id);
      };
    });

    idRef.current = maxId + 1;

    console.log(maxId)

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, [])

  // localStorage의 key 값은 반드시 원시타입으로만 넣어주어야 한다. (숫자나 문자열같은 것만 가능)
  // localStorage.setItem("test", "hello")
  // 저장 시 { name: "이정환" } 과 같이 객체를 그대로 value에 넣으면 [object Object]의 형태로 저장된다.
  // 그 이유는 웹 스토리지는 모두 문자열로 저장하기 때문에 문자열로 변환해서 넣어주는 과정이 필요하기 때문.
  // JSON.stringify()라는 메서드를 통해 JSON.stringify({ name: "이정환" }) 이런 형태로 객체를 감싸주면 정상적으로 저장할 수 있게 된다.
  // localStorage.setItem("person", JSON.stringify({ name: "이정환" }))

  // console.log(localStorage.getItem("test"));
  // console.log(localStorage.getItem("person"));를 출력했을때 {"name":"이정환"} 이라는 문자열이 출력이 된다.
  // 이를 올바르게 사용하기 위해서는 JSON.parse() 라는 메서드를 통해 JSON.parse(localStorage.getItem("person")) 형태로 감싸서 다시 문자열 -> 객체로 변환을 시켜줘야 한다.
  // console.log(JSON.parse(localStorage.getItem("person")));

  localStorage.removeItem('test');

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    });
  }

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  // 본 내용의 return 문이 반환되기 전에 로딩이 완료될동안 아래의 <div>를 대신 출력하는 조건문을 만들어줌으로서
  // 화면 출력에 필요한 로딩 완료 후 정상적으로 내용이 표시될 수 있도록 처리해준다.
  if(isLoading) {
    return <div>데이터 로딩중입니다 ...</div>;
  }

  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    </>
  )
}

export default App
