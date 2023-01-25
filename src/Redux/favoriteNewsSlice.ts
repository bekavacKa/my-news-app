import { createSlice } from '@reduxjs/toolkit';
import { IData } from '../Interfaces/DataInterface';

interface IFavoriteNewsStore {
    favoriteNews: IData[];
}

const initialState: IFavoriteNewsStore = {
    favoriteNews: [],
};

const favoriteNewsSlice = createSlice({
    name: 'favoriteNews',
    initialState,
    reducers: {
        setFavoriteNews: (state, action) => {
            state.favoriteNews = [...state.favoriteNews, action.payload];
        },
        setFromLocalStorage: (state, action) => {
            state.favoriteNews = action.payload;
        }
    }
});

export const { setFavoriteNews, setFromLocalStorage } = favoriteNewsSlice.actions;

export default favoriteNewsSlice.reducer;