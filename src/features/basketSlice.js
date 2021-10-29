import { createSlice } from '@reduxjs/toolkit';


export const basketSlice = createSlice({
    name: 'basket',
    initialState:{
        items: [],
    },
    reducers: {
        addToBasket: (state, action) => {
            const isExist = state.items.find((item) => item.id === action.payload.id);
            if (isExist) {
                isExist.quantity++;
                isExist.price += action.payload.price;
            } else {
                state.items=[...state.items , action.payload]
            }
        },
        removeFromBasket: (state, action) => {
            const isExist = state.items.find((item) => item.id === action.payload.id);
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            let newBasket = [...state.items];
            if (index >= 0 && isExist) {
                isExist.quantity--;
                isExist.price -= action.payload.price;
                newBasket.splice(index, 1);
            }
            state.items = newBasket;
        }
    }
});


export const { addToBasket,removeFromBasket } = basketSlice.actions;
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
