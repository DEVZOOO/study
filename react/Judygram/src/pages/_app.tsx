/**
 * App
 */

import wrapper from "@/reducers/store";

import Layout from "@/components/layout";

const App = ({Component, pageProps}) => {
    console.log("_app.tsx");
    return (<>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>);
};


export default wrapper.withRedux(App);