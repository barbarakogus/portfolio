import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 'home'
};

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    }
});

export const { setCurrentPage } = portfolioSlice.actions;
export default portfolioSlice.reducer;

