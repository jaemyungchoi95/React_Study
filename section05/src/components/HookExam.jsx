import useInput from "../hooks/useInput";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능 (외부에서 호출 시 즉시 오류 발생)
// 2. 조건부로 호출될 수는 없다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.
// 만들어진 커스텀 훅 들은 보통 /src/hooks 와 같은 폴더를 별도로 만들어서 훅이름.jsx 등의 파일로 별도 보관하여 사용한다.

const HookExam = () => {
        
    const [input, onChange] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    );
};

export default HookExam;