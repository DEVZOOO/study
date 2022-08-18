
import { createWrapper, HYDRATE, withRedux } from "next-redux-wrapper";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./index";

export const store = () => {
    return configureStore({
        reducer : rootReducer,
    })
};

const wrapper = createWrapper(store);

export default wrapper;