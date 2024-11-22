import "./List.css"
import { useState, useMemo, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const List = () => {
    const todos = useContext(TodoStateContext); // 기존과 다르게 props가 객체형식이 아니라서 구조분해할당으로 받지 않는다.

    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if(search === "") {
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    };

    const filteredTodos = getFilteredData();

    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        console.log("getAnalyzedData 호출!")
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos]);

    return (
        <div className="List">
            <h4>TodoList🌱</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} />;
                })}
            </div>
        </div>
    );
};

export default List;