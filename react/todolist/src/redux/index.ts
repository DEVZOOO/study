/**
 * combine reducers
 */

import { combineReducers } from 'redux';
import navReducer from "./nav";

const reducers = combineReducers({
    nav: navReducer,
});

export default reducers;