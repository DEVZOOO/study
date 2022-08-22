/**
 * Index
 */

import { wrapper } from "@/reducers";
import { setNavMenu } from "@/reducers/store/nav";
import { NAV_MENU } from '@/const';

export const Main = (props) => {
    return (
        <h2>Main</h2>
    );
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