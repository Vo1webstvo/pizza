import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    pageCount: 1,
    sort: {name: 'популярности',
            sortProperty: 'rating'},
    flag: false,
    searchValue: '',
}

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
        setFlag: (state, action) => {
            state.flag = !state.flag
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setPageCount: (state, action) => {
            state.pageCount = action.payload
        }
    },
})


export const { setCategory, setSort, setFlag, setSearchValue, setPageCount} = filtrBtnSlice.actions

export default filtrBtnSlice.reducer