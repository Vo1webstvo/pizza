import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return sum + obj.price;
            }, 0)
        },
        removeItem:(state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearItems: (state) => {
            state.items = []
        }
    },
})


export const { addItem, removeItem, clearItems} = cartSlice.actions

export default cartSlice.reducer