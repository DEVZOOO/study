/**
 * todo list 폼
 */

import { useState } from "react";
import AddForm from "./AddForm";
import TodoItem from "./TodoItem";

const TodolistForm = (props: any) => {
    const [todoList, setTodoList] = useState<string[]>([]);

    /**
     * 아이템 추가
     * @param {string} item 추가할 아이템
     */
    const fnAddItem = (item: string) => {
        const newList = [...todoList, item];
        setTodoList(newList);
    };

    /**
     * 아이템 삭제
     * @param {string} item 삭제할 아이템
     */
    const fnDelItem = (item: string) => {
        const idx = todoList.indexOf(item);
        if (idx > -1) {
            const newList = [...todoList];
            newList.forEach( (v, i) => {
                if (i === idx) {
                    return newList.splice(i, 1);
                }
            });

            setTodoList(newList);
        }
        
    };

    return (<>
        
        <div>
            <AddForm fnAddItem={fnAddItem}></AddForm>
        </div>

        <ul className='todoList'>
        {todoList.length > 0 &&
            todoList.map( (v, i) => <TodoItem key={i} item={v} fnDelItem={fnDelItem}></TodoItem> )
        }
        </ul>
    </>
    );
};

export default TodolistForm;
