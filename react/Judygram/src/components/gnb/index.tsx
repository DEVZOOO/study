/**
 * Common Header
 */

import Link from 'next/link';
import { useSelector } from 'react-redux';

import { NAV_MENU } from '@/const';
import { getNav } from "@/reducers/store/nav";

// css
import styles from './Gnb.module.scss';

interface IMenu {
    menu: NAV_MENU;
    url?: string;
    img?: string;
}

const Gnb = () => {

    const { menu } = useSelector(getNav);

    const menus: IMenu[] = [
        {
            menu : NAV_MENU.FEED,
            url : "/",
            img : "home.svg",
        },
        {
            menu : NAV_MENU.SEARCH,
            url : "/search/Search",
            img : "search.svg",
        },
        {
            menu : NAV_MENU.ABOUT,
            url : "/info/About",
        },
        {
            menu : NAV_MENU.ACCOUNT,
            url : "/account",
            img : "user.png"
        },
    ];

    return (<>
        <div className={styles.gnb}>
            <ul className={styles.nav}>
                {
                menus.map( (v, i) => (
                    <li key={i} className={v.menu === menu ? styles.active : ''}>
                        <Link href={v.url ?? "/"}>
                            {v.img
                                ? <img src={`/img/${v.img}`} alt={v.menu} title={v.menu} className={styles.navIcon} />
                                : <a>{v.menu}</a>
                            }
                        </Link>
                    </li>
                ))
                }
            </ul>
            
        </div>
    </>);
};

export default Gnb;
