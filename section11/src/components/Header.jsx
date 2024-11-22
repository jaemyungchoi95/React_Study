import "./Header.css"
import { memo } from "react";

const Header = () => {

    return (
        <div className="Header">
            <h3>오늘은📆</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

// 별도로 변수 선언 후 최적화된 Header를 export해도 되지만, 구지 그럴 필요는 없다.
// const memoizedHeader =  memo(Header);

export default memo(Header);