import { createSlice } from "@reduxjs/toolkit";

export const filterSectionSlice = createSlice({
    name: 'filterSection',
    initialState: {
        value: {
            ratingOption: null,
            isVegMeal: false,
            isNonVegMeal: false
        }
    },
    reducers: {
        setRatingOption: (state, action) => {
            state.value.ratingOption = action.payload
        },
        setIsVegMeal: (state, action) => {
            state.value.isVegMeal = action.payload
        },
        setIsNonVegMeal: (state, action) => {
            state.value.isNonVegMeal = action.payload
        }
    }
});

export const { setRatingOption, setIsVegMeal, setIsNonVegMeal } = filterSectionSlice.actions;

export default filterSectionSlice.reducer;