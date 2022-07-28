/**
 * TodoList 폼
 */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNav, changeNav, NAV_MENU } from "../redux/nav";
import TodolistForm from "../components/TodolistForm";

const Todolist = () => {
    const nav = useSelector(getNav);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeNav(NAV_MENU.TODO_LIST));
    }, [nav]);

    return (<>
        <h2 className='title'>TODO List</h2>
        <TodolistForm></TodolistForm>
    </>);
}

export default Todolist;