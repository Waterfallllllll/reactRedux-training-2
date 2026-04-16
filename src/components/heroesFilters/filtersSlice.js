import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filtersLoadingStatus: "idle",
    activeFilterElement: "",
    filters: [],
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        filtersFetching: state => {state.filtersLoadingStatus = "loading"},
        filtersFetched: (state, action) => {
            state.filtersLoadingStatus = "idle";
            state.filters = action.payload;
        },
        filtersFetchingError: state => {
            state.filtersLoadingStatus = "error"
        },
        activeFilterChanged: (state, action) => {
            state.activeFilterElement = action.payload
        }
    }
});

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    activeFilterChanged
} = actions;