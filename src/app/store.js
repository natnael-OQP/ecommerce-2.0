import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import basketReducer from '../features/basketSlice';
import searchReducer from '../features/searchSlice';

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    basket: basketReducer,
    search: searchReducer,
  },
});
