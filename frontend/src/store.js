import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './slices/apiSlice';
import  cartSlicereducer  from './slices/cartSlices';
import authSlicereducer from './slices/authSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSlicereducer,
        auth: authSlicereducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;