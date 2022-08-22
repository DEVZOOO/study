/**
 * combine reducers
 */

import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Action } from 'redux';
// import { HYDRATE } from 'next-redux-wrapper';
// import { combineReducers } from 'redux';
import navReducer from "./store/nav";


// const reducers = combineReducers({
//     nav: navReducer,
// });

// const reducers = (state, action) => {
//     if (action.type === HYDRATE) {
//         return { ...state, ...action.payload };
//     } else {
//         const combinedReducer = combineReducers({
//             nav: navReducer,
//         });
//         return combinedReducer(state, action);
//     }
// };

// export default reducers;

// export type RootState = ReturnType<typeof reducers>;

const makeStore = () => configureStore({
    reducer : {
        nav : navReducer,
    },
    devTools : true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type ApThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);