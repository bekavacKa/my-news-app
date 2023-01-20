import { createSlice } from '@reduxjs/toolkit';

interface ILoaderState {
    miniLoading: boolean;
}

const loaderMiniSlice = createSlice({
    name: 'miniLoader',
    initialState: {
        miniLoading: false,
    },
    reducers: {
        setMiniLoader: (state : ILoaderState, action) => {
            state.miniLoading = action.payload;
        }
    }
});

export const {setMiniLoader} = loaderMiniSlice.actions;

export default loaderMiniSlice.reducer;