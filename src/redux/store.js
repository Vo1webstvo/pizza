import { configureStore } from '@reduxjs/toolkit'
import filtrBtnSlice from './slices/filterBtnsSlices'
import cartSlice from "./slices/cartSlice";
import pizzaSlice from "./slices/pizzaSlice";

export const store = configureStore({
    reducer: {
        filter: filtrBtnSlice,
        cart: cartSlice,
        pizza: pizzaSlice
    },
})
