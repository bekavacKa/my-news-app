import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';
import favoriteNewsSlice from './favoriteNewsSlice';
import loaderMiniSlice from './loaderMiniSlice';
import loaderSlice from './loaderSlice';
import searchTermSlice from './searchTermSlice';

export const store = configureStore({
    reducer:{
        loaderStore : loaderSlice,
        loaderMiniStore : loaderMiniSlice,
        newsDataStore : dataSlice,
        searchTermStore : searchTermSlice,
        favoriteNewsStore : favoriteNewsSlice,
    }
});