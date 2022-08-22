/**
 * Index
 */

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { wrapper } from "@/reducers";
import { setNavMenu } from "@/reducers/store/nav";
import { getAuth } from "@/reducers/store/auth";
import { NAV_MENU } from '@/const';

export const Main = (props) => {
    const router = useRouter();
    const auth = useSelector(getAuth);
    const isLogin = auth.id;

    // login 여부에 따라 라우팅
    useEffect(() => {
        router.push(isLogin ? "/feed" : "/auth");
    }, []);
    return (<>
        {/* <Feed /> */}
    </>);
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    // console.log('ctx', ctx);

    store.dispatch(setNavMenu(NAV_MENU.HOME));
    return {
        props : {
            // resolvedUrl : ctx.resolvedUrl,
        }
    };
});

export default Main;