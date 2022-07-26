
import { useRef } from "react";

const TodoItem = (props: any) => {
    const item = props.item;
    const fnDelItem = props.fnDelItem;

    const itemRef = useRef<HTMLElement>(null);

    /**
     * Del 버튼 클릭시 핸들러
     */
    const fnDelHandler = () => {
        const item = itemRef.current?.innerHTML;
        if (window.confirm(`Are you sure delete '${item}'?`)) {
            fnDelItem(item);
        }
    };

    return (
        <li>
            <span ref={itemRef} style={{width: '100%'}}>{item}</span>
            <button className="btn btn-del" onClick={fnDelHandler}>DEL</button>
        </li>
    );
};

export default TodoItem;