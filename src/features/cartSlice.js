import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        id:null,
        cartInfo:null,
    },
    reducers: {
        cartInfo: (state, action) => {
            state.cartInfo = action.payload;
            state.id = action.payload.id;
        },
    }
});

export const { cartInfo } = cartSlice.actions;

export const selectCart = (state) => state.cart.cartInfo;
export const selectID = (state) => state.cart.id;


export default cartSlice.reducer;
