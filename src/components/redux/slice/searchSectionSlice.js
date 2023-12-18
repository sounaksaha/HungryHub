import { createSlice } from "@reduxjs/toolkit";

export const searchSectionSlice = createSlice({
    name: 'SearchSection',
    initialState: {
        value: {
            showSearchSection: false
        }
    },
    reducers: {
        setShowSearchSection: (state, action) => {
            state.value.showSearchSection = action.payload
        }
    }
})

export const { setShowSearchSection } = searchSectionSlice.actions;

export default searchSectionSlice.reducer;