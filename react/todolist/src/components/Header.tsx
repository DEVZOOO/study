/**
 * Header
 */

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NAV_MENU, getNav } from "../redux/nav";

const Header = (props: any) => {
    const nav = useSelector(getNav);        // 현재 접속한 메뉴
    const menus = [
        {
            title : "Home",
            link : "",
            nav : NAV_MENU.HOME,
        },
        {
            title : "Todo List",
            link : "todolist",
            nav : NAV_MENU.TODO_LIST,
        },
    ];

    return (
    <div className="wrapper">
        <ul className="gnb">
        {
            menus.map( (v, i) => {
                return (
                    <li key={i}>
                        <Link to={"/" + v.link} className={v.nav === nav ? '' : 'hl-pink'}>
                            {v.title}
                        </Link>
                    </li>
                );
            })
        }
        </ul>
    </div>);
};

export default Header;