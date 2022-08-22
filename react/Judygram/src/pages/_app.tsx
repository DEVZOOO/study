/**
 * App
 */

import type { AppProps } from "next/app";
import { wrapper } from "@/reducers"
import Layout from "@/components/layout";

import "@/assets/css/main.scss";

const App = ({Component, pageProps}: AppProps) => {
    console.log("_app.tsx");
    return (
    <div className="app-wrap">
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </div>
    );
};


export default wrapper.withRedux(App);