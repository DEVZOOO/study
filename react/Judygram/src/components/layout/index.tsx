/**
 * Layout
 */

import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { COMMON } from "@/const/const.enum";

import styles from "./Layout.module.scss";

const Layout = ({
    children,
    title = ""
}) => {
    const appTitle = title === "" ? COMMON.APP_NAME : `${title} ${COMMON.SPLIT_CHAR} ${COMMON.APP_NAME}`;
    return (<>
        <Head>
            <title>{appTitle}</title>
        </Head>
        
        <div className={styles.wrapper}>
            <Header />
            {children}
            <Footer />
        </div>
    </>);
};

export default Layout;