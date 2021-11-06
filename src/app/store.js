import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import basketReducer from '../features/basketSlice';
import searchReducer from '../features/searchSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    basket: basketReducer,
    search: searchReducer,
    user: userReducer,
  },
});
