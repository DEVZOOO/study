/**
 * Header
 */

import { Link } from "react-router-dom";

const Header = (props: any) => {
    const menus = [
        {
            title : "Home",
            link : "/",
        },
        {
            title : "Todo List",
            link : "/todolist",
        },
    ];

    console.log(props);

    return (
    <div className="wrapper">
        <ul className="gnb">
            {
            menus.map( (v, i) => {
                return (
                    <li key={i}>
                        <Link to={v.link} className="hl-pink">
                            {v.title}
                        </Link>
                        {/* <a href={v.link} className="hl-pink">{v.title}</a> */}
                    </li>
                );
            })
            }
        </ul>
    </div>);
};

export default Header;