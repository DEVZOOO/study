/**
 * Search
 */

import { NAV_MENU } from '@/const';
import { wrapper } from "@/reducers";
import { getNav, setNavMenu } from "@/reducers/store/nav";
import { useSelector } from "react-redux";

const Search = () => {
    const nav = useSelector(getNav);
    return (
        <h2>{nav.menu}</h2>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    store.dispatch(setNavMenu(NAV_MENU.SEARCH));
    return {
        props : {}
    };
});

export default Search;