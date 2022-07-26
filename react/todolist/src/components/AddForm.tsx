/**
 * 신규 아이템 추가 폼
 */

import { useEffect, useRef } from "react";

/**
 * input, button
 */
const AddForm = (props: any) => {
    const fnAddItem = props.fnAddItem;
    const inputRef = useRef<HTMLInputElement>(null);

    /**
     * Add 버튼 클릭시 핸들러
     */
    const fnAddHandler = () => {
        if (inputRef) {
            const el = inputRef.current;
            const item = el?.value;
            fnAddItem(item);

            el && (el.value = "");
            el?.focus();
        }
        
    };

    useEffect(() => {
        inputRef.current?.focus();
    });

    return (
        <div className="addForm">
          <label>
            <input type="text" ref={inputRef}/>
          </label>
          <button className='btn' onClick={fnAddHandler}>Add</button>
        </div>
    );
}

export default AddForm;