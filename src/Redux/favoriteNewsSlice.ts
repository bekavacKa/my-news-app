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
            const newFavoriteNews = action.payload;
            if(state.favoriteNews.find((item) => item.uri === newFavoriteNews.uri) === undefined) {
                state.favoriteNews = [...state.favoriteNews, newFavoriteNews];
                localStorage.setItem('favoriteNews', JSON.stringify(state.favoriteNews));
            }
        },
        removeFavoriteNews: (state, action: { payload: IData }) => {
            state.favoriteNews = state.favoriteNews.filter(favorite => favorite.uri !== action.payload.uri);
            localStorage.setItem('favoriteNews', JSON.stringify(state.favoriteNews));
        },
        setFromLocalStorage: (state, action) => {
            state.favoriteNews = action.payload;
        }
    }
});

export const { setFavoriteNews, removeFavoriteNews, setFromLocalStorage } = favoriteNewsSlice.actions;

export default favoriteNewsSlice.reducer;