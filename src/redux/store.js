import { configureStore } from '@reduxjs/toolkit'
import filtrBtnSlice from './slices/filterBtnsSlices'
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        filter: filtrBtnSlice,
        cart: cartSlice,
    },
})
