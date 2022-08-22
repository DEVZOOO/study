/**
 * Layout
 */

import { useSelector } from "react-redux";
import { getNav } from "@/reducers/store/nav";

import Head from "next/head";

import Gnb from "@/components/gnb";
import Story from "@/components/story";
import Footer from "@/components/footer";

import { COMMON, NAV_MENU } from "@/const";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
    const { menu } = useSelector(getNav);
    const appTitle = menu === NAV_MENU.HOME ? COMMON.APP_NAME : `${menu} ${COMMON.SPLIT_CHAR} ${COMMON.APP_NAME}`;

    let topComp;
    switch (menu) {
        case NAV_MENU.ABOUT :
            topComp = '';
            break;
        case NAV_MENU.HOME:
        default :
            topComp = <Story />

    }

    return (<>
        <Head>
            <title>{appTitle}</title>
        </Head>
        
        <div className={styles.wrapper}>
            <Gnb />

            {/* 메뉴에 따라 다른 상단 컴포넌트 */}
            {topComp}

            <div className={styles.content}>
                {children}
            </div>

            {/* <Footer /> */}
        </div>
    </>);
};

export default Layout;