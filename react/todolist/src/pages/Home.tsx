/**
 * Main
 */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAV_MENU, changeNav, getNav } from '../redux/nav';

const Home = () => {
    const nav = useSelector(getNav);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeNav(NAV_MENU.HOME));
    }, [nav]);

    return (<>
        <h2>DEVZOOO</h2>
        <div>
            Toy Project
        </div>
    </>);
};

export default Home;