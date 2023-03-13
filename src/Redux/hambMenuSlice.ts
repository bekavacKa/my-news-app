import { createSlice } from '@reduxjs/toolkit';

interface IHambMenuState {
    isHambMenuOpen: boolean;
}

const hambMenuSlice = createSlice({
    name: 'hamburgerMenu',
    initialState: {
        isHambMenuOpen: false,
    },
    reducers: {
        setHambMenu: (state : IHambMenuState, action) => {
            state.isHambMenuOpen = action.payload;
        }
    }
});

export const {setHambMenu} = hambMenuSlice.actions;

export default hambMenuSlice.reducer;