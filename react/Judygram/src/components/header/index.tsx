/**
 * Common Header
 */

import Link from 'next/link';
import { useSelector } from 'react-redux';

import { NAV_MENU } from '@/const/const.enum';

// css
import styles from './Header.module.scss';

const Header = () => {

    const { menu } = useSelector( (state: any) => state.nav );

    console.log(menu);

    const menus = Object.keys(NAV_MENU);

    return (<>
        <div>
            <ul className={styles.nav}>
                {/* <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/info/About">
                        <a>About</a>
                    </Link>
                </li> */}
                {
                menus.map( (v, i) => (
                    <li key={i}>
                        <Link href={v}>
                            <a
                                style={
                                    NAV_MENU[v] === menu ? { color : 'red'} : {}
                                }
                            >{NAV_MENU[v]}</a>
                        </Link>
                    </li>
                ))
                }
            </ul>
            
        </div>
    </>);
};

export default Header;
