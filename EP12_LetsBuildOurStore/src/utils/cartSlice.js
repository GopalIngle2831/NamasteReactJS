import { createSlice } from "@reduxjs/toolkit";
/*
 createSlice is used to create:
 1. Initial state
 2. Reducer functions (logic to update state)
 3. Action creators automatically
*/

const cartSlice = createSlice({
    name: "cart", //Slice name → used internally to create action types like "cart/addItem"
    initialState: {
        items: []
    },
    // initialState → default state when app loads
    // Final state structure inside store will look like:
    // { cart: { items: [] } }
    reducers: {
        /*
         Reducers are functions that update state.
         They receive:
         - state (current state)
         - action (object containing type + payload)
        */
        addItem: (state, action) => {
            // action.payload contains the data passed during dispatch
            // Example: dispatch(addItem("Burger"))
            // Here payload = "Burger"
            // We are pushing new item into items array.
            // This looks like mutation, but Redux Toolkit uses Immer internally
            // so state remains immutable behind the scenes.
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // Removes the last item from cart
            state.items.pop();
        },
        clearCart: (state, action) => {
            // Clears entire cart by resetting array length to 0
            state.items.length = 0;
        }
    }
});

//Important
// state → represents the current data of this slice (cart).
// In Redux, state should be immutable (we should not modify original state directly).
// Instead of changing original state, a new updated copy should be created.
// Redux Toolkit uses Immer internally, so we can write code like
// state.items.push(action.payload)
// which looks like mutation, but actually keeps the state immutable behind the scenes.

/*
 cartSlice automatically generates:
 - Action creators (addItem, removeItem, clearCart)
 - Reducer function
*/


// Exporting action creators
// These are used inside components with dispatch()
export const {addItem, removeItem, clearCart} = cartSlice.actions;

// Exporting reducer function
// Store needs this reducer to manage cart state
export default cartSlice.reducer;