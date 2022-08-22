/**
 * login account reducer
 */

import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "..";

export const AuthSlice = createSlice({
    name : 'auth',

    initialState : {
        id : null,  // undefined은 JSON 변경 안됨!
    },

    reducers : {
        setId : (state, action) => {
            state.id = action.payload;
        },
    },

    extraReducers : {
        [HYDRATE] : (state, action) => {
            if (!action.payload.auth.id) {
                return state;
            }
            state.id = action.payload.auth.id;
        },
    },
    
});

export const { setId } = AuthSlice.actions;
export const getAuth = (state: AppState) => state.auth;

export default AuthSlice.reducer;