/**
 * Auth
 */
import { wrapper } from "@/reducers";
import { useRef } from "react";
import { setNavMenu } from "@/reducers/store/nav";
import { setId } from "@/reducers/store/auth";
import { NAV_MENU } from '@/const';
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Auth = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const inputRef = useRef(undefined);

    const handleClick = (e) => {
        dispatch(setId(inputRef.current.value));
        router.push("/");
    };
    return (<>
        <h2>Sign in</h2>
        <input type="text" ref={inputRef} style={{backgroundColor: "#333"}}/>
        <button onClick={handleClick}>OK</button>
    </>);
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    store.dispatch(setNavMenu(NAV_MENU.AUTH));
    return {
        props : {}
    };
});

export default Auth;