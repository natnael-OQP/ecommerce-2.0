import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartInfo:null,
    },
    reducers: {
        cartInfo: (state, action) => {
        state.cartInfo =  action.payload;
        },
    }
});

export const { cartInfo } = cartSlice.actions;

export const selectCart = (state) => state.cart.cartInfo;


export default cartSlice.reducer;
