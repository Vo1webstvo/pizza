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
            const findItem = state.items.find(item => item.id === action.payload.id);
            if(findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return sum + (obj.price * obj.count);
            }, 0)
        },
        removeItem:(state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearItems: (state) => {
            state.items = [];
        },
        plusItem:(state, action) => {
            const findItem = state.items.find(item => item.id === action.payload);
            if(findItem) {
                findItem.count++
            }
        },
        minusItem:(state, action) => {
            const findItem = state.items.find(item => item.id === action.payload);
            if(findItem && findItem.count > 0) {
                findItem.count--;
            }
        }
    },
})


export const { addItem, removeItem, clearItems, plusItem, minusItem} = cartSlice.actions

export default cartSlice.reducer