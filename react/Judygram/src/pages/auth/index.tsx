/**
 * Auth - Sign in
 */
import { wrapper } from "@/reducers";
import { useRef } from "react";
import { setNavMenu } from "@/reducers/store/nav";
import { setId } from "@/reducers/store/auth";
import { NAV_MENU } from '@/const';
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

// css
import styles from "./Auth.module.scss";

const Auth = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const idRef = useRef(undefined);
    const pwRef = useRef(undefined);

    const handleClick = () => {
        dispatch(
            setId(idRef.current.value)
        );
        router.push("/");
    };
    return (
        <div className={styles.loginWrap} >
            <h2 className={styles.title}>WELCOME!</h2>

            <div className={styles.form}>
                <ul>
                    <li>
                        <input type="text" ref={idRef} placeholder="ID" />
                    </li>
                    <li>
                        <input type="password" ref={pwRef} placeholder="PW" />
                    </li>
                </ul>
                
                <button onClick={handleClick}>OK</button>
                
            </div>
        </div>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    store.dispatch(setNavMenu(NAV_MENU.AUTH));
    return {
        props : {}
    };
});

export default Auth;