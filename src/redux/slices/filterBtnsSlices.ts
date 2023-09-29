import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  value: number; //наши кнопки пицц (Все, Мясные и т.д)
  pageCount1: number;
  sort: { name: string; sortProperty: string };
  flag: boolean;
  searchValue: string;
}

const initialState: IInitialState = {
  value: 0, //наши кнопки пицц (Все, Мясные и т.д)
  pageCount1: 1,
  sort: { name: 'популярности', sortProperty: 'rating' },
  flag: false,
  searchValue: '',
};

export const filtrBtnSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.value = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setFlag: (state) => {
      state.flag = !state.flag;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setPageCount: (state, action: PayloadAction<number>) => {
      state.pageCount1 = action.payload;
    },
    setParams: (state, action) => {
      state.sort = action.payload.sort;
      state.pageCount1 = +action.payload.pageCount1;
      state.value = +action.payload.value;
    },
  },
});

export const { setCategory, setSort, setFlag, setSearchValue, setPageCount, setParams } =
  filtrBtnSlice.actions;

export default filtrBtnSlice.reducer;
