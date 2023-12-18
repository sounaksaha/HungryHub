import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
    name: 'drawerState',
    initialState: {
        isOpen: true
    },
    reducers: {
        toggleDrawer: (state) => {
            state.isOpen = !state.isOpen; // Toggles the drawer state
        },
        openDrawer: (state) => {
            state.isOpen = true; // Manually set the drawer to open
        },
        closeDrawer: (state) => {
            state.isOpen = false; // Manually set the drawer to close
        },
    }
});


export const { toggleDrawer, openDrawer, closeDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;