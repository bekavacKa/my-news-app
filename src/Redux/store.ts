import { configureStore } from '@reduxjs/toolkit';
import loaderMiniSlice from './loaderMiniSlice';
import loaderSlice from './loaderSlice';

export const store = configureStore({
    reducer:{
        loaderStore : loaderSlice,
        loaderMiniStore : loaderMiniSlice,
    }
});