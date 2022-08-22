/**
 * User Account Info
 */

import { NAV_MENU } from '@/const';
import { wrapper } from "@/reducers";
import { getNav, setNavMenu } from "@/reducers/store/nav";
import { useSelector } from "react-redux";

import Profile from "./profile";

const Account = () => {
    return (<>
        <Profile />
    </>);
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    store.dispatch(setNavMenu(NAV_MENU.ACCOUNT));
    return {
        props : {}
    };
});

export default Account;