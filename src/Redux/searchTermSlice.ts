import { createSlice } from '@reduxjs/toolkit';

interface ISearchTermState {
    searchTerm: string;
}

const searchTermSlice = createSlice({
    name: 'Search Term',
    initialState: {
        searchTerm: "",
    },
    reducers: {
        setSearchTerm: (state : ISearchTermState, action) => {
            state.searchTerm = action.payload;
        }
    }
});

export const { setSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;