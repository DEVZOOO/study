/**
 * Layout
 */

import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { COMMON } from "@/const/const.enum";

const Layout = ({
    children,
    title = ""
}) => {
    const appTitle = title === "" ? COMMON.APP_NAME : `${title} ${COMMON.SPLIT_CHAR} ${COMMON.APP_NAME}`;
    return (<>
        <Head>
            <title>{appTitle}</title>
        </Head>
        <Header />
            
        {children}

        <Footer />
    </>);
};

export default Layout;