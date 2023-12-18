import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
    name: 'ShoppingCart',
    initialState: {
        items: [],
        totalPrice: 0,
        totalQuantity: 0,
        restaurantId: null,
        showError: false,
        newItemToAdd: null
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price, restaurantId } = action.payload;
            if (!state.restaurantId || restaurantId == state.restaurantId) {
                if (state.items[id]) {
                    state.items[id].quantity += 1; // Increment quantity if item exists
                } else {
                    state.items[id] = { id, name, price, quantity: 1 }; // Add new item to cart
                }

                state.totalPrice += price; // Update total cost
                state.totalQuantity += 1;
            } else {
                state.showError = true;
                state.newItemToAdd = { id, name, price, quantity: 1, restaurantId };
            }
        },

        removeFromCart: (state, action) => {
            const { id } = action.payload;
            if (state.items[id]) {
            
                state.totalPrice -= state.items[id].price; // Update total cost
                state.totalQuantity -= 1;
                
                if (state.items[id].quantity > 1) {
                    state.items[id].quantity -= 1; // Decrement quantity if more than one
                } else {
                    delete state.items[id]; // Remove item if quantity is one
                }
            }
        },

        clearError: (state) => {
            state.showError = false;
        },

        confirmClearCart: (state) => {
            state.showError = false;
            
            if (state.newItemToAdd) {
                const { id, name, price, restaurantId, quantity } = state.newItemToAdd;
                state.items = [];
                state.items[id] = { id, name, price, quantity: 1 };
                state.totalPrice += price * quantity;
                state.restaurantId = restaurantId;
                state.newItemToAdd = null;
                state.totalQuantity = 1;
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
            state.restaurantId = null;
            state.showError = false;
            state.newItemToAdd = null;
        }
    }
})

export const { addToCart, removeFromCart, clearCart, confirmClearCart, clearError } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;