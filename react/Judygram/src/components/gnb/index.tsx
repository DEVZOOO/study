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
}

const Gnb = () => {

    const { menu } = useSelector(getNav);

    const menus: IMenu[] = [
        {
            menu : NAV_MENU.HOME,
            url : "/",
        },
        {
            menu : NAV_MENU.FEED,
        },
        {
            menu : NAV_MENU.ABOUT,
            url : "/info/About",
        },
        {
            menu : NAV_MENU.ACCOUNT,
        },
    ];

    return (<>
        <div className={styles.gnb}>
            <ul className={styles.nav}>
                {
                menus.map( (v, i) => (
                    <li key={i} className={v.menu === menu ? styles.active : ''}>
                        <Link href={v.url ?? "/"}>
                            <a>{v.menu}</a>
                        </Link>
                    </li>
                ))
                }
            </ul>
            
        </div>
    </>);
};

export default Gnb;
