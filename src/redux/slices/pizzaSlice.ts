import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPizza } from '../../interface/PizzaInterface';

interface PizzaSliceState {
  pizzas: IPizza[];
  status: 'loading' | 'success' | 'error';
}

const initialState: PizzaSliceState = {
  pizzas: [],
  status: 'loading',
};

interface IFetchProps {
  pageCount1: number;
  category: string;
  sort: {
    name: string;
    sortProperty: string;
  };
  search: string;
}

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizza',
  async ({ pageCount1, category, search, sort }: IFetchProps) => {
    const { data } = await axios.get<IPizza[]>(
      `https://649fc7e3ed3c41bdd7a6aea8.mockapi.io/items?page=${pageCount1}&limit=4&${category}&${search}&sortBy=${sort.sortProperty}&order=desc`,
    );
    return data;
  },
);

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IPizza[]>) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizza.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPizza.fulfilled, (state, action) => {
        state.pizzas = action.payload;
        state.status = 'success';
      })
      .addCase(fetchPizza.rejected, (state) => {
        state.status = 'error';
      })
      .addDefaultCase(() => {});
  },
});

// export const { removeItem} = pizzaSlice.actions

export default pizzaSlice.reducer;
