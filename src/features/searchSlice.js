import { createSlice } from '@reduxjs/toolkit';


export const searchSlice = createSlice({
    name: 'search',
    initialState:{
        search: '',
    },
    reducers: {
        search: (state, action) => {
            state.search =  action.payload;
        },
    }
});

export const { search,addData } = searchSlice.actions;

export const selectSearch = (state) => state.search.search;


export default searchSlice.reducer;
