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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
