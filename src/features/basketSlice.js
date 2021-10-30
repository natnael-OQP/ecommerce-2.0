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
                isExist.price += isExist.originalPrice;
            } else {
                const data = action.payload;
                state.items.push({
                    id: data.id,
                    name: data.name,
                    imageUrl:data.imageUrl,
                    rate:data.rate,
                    reviews: data.review,
                    price:data.price,
                    quantity: data.quantity,
                    originalPrice:data.price,
                })
            }
        },
        removeFromBasket: (state, action) => {
            const isExist = state.items.find((item) => item.id === action.payload.id);
            const index = state.items.findIndex((item) => item.id === action.payload.id)
            let newBasket = [...state.items];
            if (isExist.quantity > 1  ) {
                isExist.quantity--;
                isExist.price -= isExist.originalPrice;
            }else{
                newBasket.splice(index, 1);
            }
            state.items = newBasket;
        },
        Delate: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            let newBasket = [...state.items];
            if (index >= 0 ) {
                newBasket.splice(index, 1);
            }
            state.items = newBasket;
        },
    }
});


export const { addToBasket,removeFromBasket,Delate } = basketSlice.actions;
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item?.price, 0);
export const selectTotalQuantity = (state) => state.basket.items.reduce((total, item) => total + item?.quantity, 0);
export default basketSlice.reducer;
