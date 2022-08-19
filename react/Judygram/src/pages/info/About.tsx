/**
 * About
 */

import { useDispatch } from "react-redux";

import changeNav from "@/reducers/nav";
import { NAV_MENU } from "@/const/const.enum";

const About = () => {

    const dispatch = useDispatch();

    // dispatch( changeNav(NAV_MENU.ABOUT) );

    return (
        <h2>About!</h2>
    );
};

export default About;