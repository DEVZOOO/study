/**
 * nav menu reducer
 */

import { NAV_MENU } from "@/const/const.enum";

// export const navSlice = createSlice({
//     name: 'nav',
//     initialState: {
//         menu: NAV_MENU.HOME,
//     },
//     reducers: {
//         changeNav: (state: any, action: any) => {
//             state.menu = action.payload;
//         },
//     },
// });

// export const {
//     changeNav,
// } = navSlice.actions;

// export const getNav = (state: any) => state.nav.menu;

// export default navSlice.reducer;

export const changeNav = (menu: NAV_MENU) => ({payload: menu});
const initValue = NAV_MENU.HOME;

const reducer = (state = initValue, action) => {
    return {
        menu : action.payload ?? state,
    };
};

export default reducer;