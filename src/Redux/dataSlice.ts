import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        newsData: [],
    },
    reducers: {
        setData: (state, action) => {
            state.newsData = action.payload;
        }
    }
});

export const {setData} = dataSlice.actions;

export default dataSlice.reducer;