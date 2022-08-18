/**
 * combine reducers
 */

import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import navReducer from "./nav";

// const reducers = combineReducers({
//     nav: navReducer,
// });

const reducers = (state, action: any) => {
    if (action.type === HYDRATE) {
        return { ...action.payload };
    } else {
        const combinedReducer = combineReducers({
            nav: navReducer,
        });
        return combinedReducer(state, action);
    }
};

export default reducers;