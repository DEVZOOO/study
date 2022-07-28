/**
 * combine reducers
 */

import { combineReducers } from 'redux';
import rootReducer from "./nav";

const reducers = combineReducers({
    root: rootReducer,
});

export default reducers;