/**
 * nav menu reducer
 */

import { createSlice } from '@reduxjs/toolkit';

// menu enum
export enum NAV_MENU {
    HOME = "home",
    TODO_LIST = "todolist",
}

export const rootSlice = createSlice({
    name : 'root',
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
} = rootSlice.actions;

export const getNav = (state: any) => state.root.menu;

export default rootSlice.reducer;
