/**
 * nav menu reducer
 */

import { createSlice } from '@reduxjs/toolkit';

// menu enum
export enum NAV_MENU {
    HOME = "home",
    TODO_LIST = "todolist",
}

export const navSlice = createSlice({
    name : 'nav',
    initialState : {
        menu : NAV_MENU.HOME,
    },
    reducers : {
        changeNav : (state: any, action: any) => {
            state.menu = action.payload;
        },
    },
});

export const {
    changeNav,
} = navSlice.actions;

export const getNav = (state: any) => state.nav.menu;

export default navSlice.reducer;
