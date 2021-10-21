import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import cartReducer from '../features/cartSlice';
import basketReducer from '../features/basketSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart:cartReducer,
    basket:basketReducer,
  },
});
