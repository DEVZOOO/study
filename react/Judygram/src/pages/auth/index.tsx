/**
 * Auth
 */
import { wrapper } from "@/reducers";
import { setNavMenu } from "@/reducers/store/nav";
import { NAV_MENU } from '@/const';

const Auth = () => {
    return (
        <h2>Sign in</h2>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    store.dispatch(setNavMenu(NAV_MENU.AUTH));
    return {
        props : {}
    };
});

export default Auth;