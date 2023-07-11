import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    pizzas: [],
    status: '',
}


export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizza',
     async (params) => {
        const {pageCount,category,search, sort } = params;
        const {data} = await axios.get(`https://649fc7e3ed3c41bdd7a6aea8.mockapi.io/items?page=${pageCount}&limit=4&${category}&${search}&sortBy=${sort.sortProperty}&order=desc`);
        return data;
    }
)

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems (state, action) {
            state.pizzas = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizza.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchPizza.fulfilled, (state, action) => {
                state.pizzas = action.payload;
                state.status = 'success';
            })
            .addCase(fetchPizza.rejected, state => {
                state.status = 'error'
            })
            .addDefaultCase(() => {})
    }
})


// export const { removeItem} = pizzaSlice.actions

export default pizzaSlice.reducer