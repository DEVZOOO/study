/**
 * Layout
 */

import Head from "next/head";
import { useSelector } from "react-redux";
import { getNav } from "@/reducers/store/nav";

import Gnb from "@/components/gnb";
import Story from "@/components/story";
import Footer from "@/components/footer";

import { COMMON, NAV_MENU } from "@/const";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
    const { menu } = useSelector(getNav);
    const appTitle = menu === NAV_MENU.HOME ? COMMON.APP_NAME : `${menu} ${COMMON.SPLIT_CHAR} ${COMMON.APP_NAME}`;

    const child = menu === NAV_MENU.FEED
    ? children
    : <div className={styles.content}>
        {children}
    </div>
    ;

    return (<>
        <Head>
            <title>{appTitle}</title>
        </Head>
        
        <div className={styles.wrapper}>
            <Gnb />

            {child}

            {/* <Footer /> */}
        </div>
    </>);
};

export default Layout;