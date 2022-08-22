/**
 * nav menu reducer
 */

import { createSlice } from '@reduxjs/toolkit';
import { NAV_MENU } from "@/const";
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '..';

export const NavSlice = createSlice({
    name : 'nav',
    
    initialState : {
        menu : NAV_MENU.HOME,
    },

    // called dispatch name
    reducers : {
        setNavMenu : (state, action) => {
            state.menu = action.payload;
        }
    },

    // 서버사이드 랜더링 사용시 다른 리듀서 필요
    extraReducers : {
        // 페이지 나갈때
        [HYDRATE] : (state, action) => {
            // TODO - handle client side state override
            if (!action.payload.nav.menu) {
                return state;
            }
            state.menu = action.payload.nav.menu;
        },
    }
});

export const { setNavMenu } = NavSlice.actions;
export const getNav = (state: AppState) => state.nav;

export default NavSlice.reducer;