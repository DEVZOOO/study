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

const initValue = {
    type : "init",
    menu : NAV_MENU.HOME,
};

export const changeNav = (menu: NAV_MENU) => {
    return { type : "change", payload : menu, }
};

const reducer = (state = initValue, action) => {
    switch (action.type) {
        default :
            return {
                ...state,
                menu : action.payload,
            };
    }
    
};

export default reducer;