/**
 * define redux store
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from "./index";

const store = configureStore({
    /**
     * 한개면 root로 바로 접근하여 사용 가능,
     * sliceReducer 객체면({key : reducer} 형식) combineReducers한테 넘겨주고 root reducer를 자동 생성해줌
     * 
     */
    reducer: rootReducer,

    /**
     * 없어두댐,
     * 값 있으면 store에 추가하고 싶은 미들웨어 메소드들이 포함되있어야함
     * configureStore가 applyMiddleware에 자동으로 넘겨줄거임
     * 미들웨어 메소드 추가하거나 기본 미들웨어 메소드를 커스텀하고 싶으면
     * getDefaultMiddleware 메소드 파라미터로 넘기면 댐, 그러면 미들웨어 배열 반환함
     */
    middleware: getDefaultMiddleware,
});

export default store;