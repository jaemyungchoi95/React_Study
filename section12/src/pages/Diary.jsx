import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
    const params = useParams();
    const nav = useNavigate();

    const curDiaryItem = useDiary(params.id);

    usePageTitle(`${params.id}번 일기`);
    
    // 만약 curDiaryItem이 undefined이면 아래와 같은 문구 출력
    if (!curDiaryItem) {
        return <div>데이터 로딩중...!</div>;
    };
    
    // undefined가 아니면 curDiaryItem에서 구조분해할당으로 필요한 요소들을 꺼내서 써준다.
    const { createdDate, emotionId, content } = curDiaryItem;
    const title = getStringedDate(new Date(createdDate));

    return (
        <div className="Diary">
            <Header 
                title={`${title} 기록`} 
                leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />} 
                rightChild={<Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />}
            />
            <Viewer emotionId={emotionId} content={content} />
        </div>
    );
};

export default Diary;