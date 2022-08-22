/**
 * combine reducers
 */

import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Action } from 'redux';

import authReducer from "./store/auth";
import navReducer from "./store/nav";

const makeStore = () => configureStore({
    reducer : {
        auth : authReducer,
        nav : navReducer,
    },
    devTools : true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);