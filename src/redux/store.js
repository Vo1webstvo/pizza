import { configureStore } from '@reduxjs/toolkit'
import filtrBtnSlice from './slices/filterBtnsSlices'

export const store = configureStore({
    reducer: {
        filter: filtrBtnSlice,
    },
})
