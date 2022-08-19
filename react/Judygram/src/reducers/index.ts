/**
 * combine reducers
 */

import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import navReducer from "./nav";

// const reducers = combineReducers({
//     nav: navReducer,
// });

const reducers = (state, action) => {
    if (action.type === HYDRATE) {
        return { ...state, ...action.payload };
    } else {
        const combinedReducer = combineReducers({
            nav: navReducer,
        });
        return combinedReducer(state, action);
    }
};

export default reducers;

export type RootState = ReturnType<typeof reducers>;