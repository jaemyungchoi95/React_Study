import { useState, useEffect, useContext } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";


const useDiary = (id) => {
    // 수정 시 기존의 데이터를 불러와주기 위한 변수
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    // useEffect가 params.id와 data의 State가 변경될 때 동작하도록 설정해주는 것이다.
    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(id)
        );

        // 만약 사용자가 존재하지 않는 일기 페이지에 들어간다면
        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true });
        };
        setCurDiaryItem(currentDiaryItem);
    }, [id, data]); 

    return curDiaryItem;
};

export default useDiary;