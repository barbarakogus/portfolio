import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from './portfolioSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const store = configureStore({
    reducer: {
        portfolioReducer: portfolioReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store; 