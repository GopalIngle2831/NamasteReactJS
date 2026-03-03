import {configureStore} from "@reduxjs/toolkit" //It comes from redux toolkit, because it build store
import cartReducers from "./cartSlice"
// Importing the reducer function from cartSlice
// This reducer controls how cart state updates

// configureStore creates the Redux store easily
// It automatically sets up Redux DevTools and middleware
const appStore = configureStore({
    reducer: {
        cart: cartReducers
        /*
         This creates a state key called "cart"

         Final Redux store structure becomes:

         {
            cart: {
                items: []
            }
         }

         "cart" here defines the key inside global state.
        */
    }
})

// Exporting the store so it can be provided to the entire app
export default appStore;




//                  Component
//                     ↓ dispatch(action)
//                  Action
//                     ↓
//                  Reducer(cartSlice)
//                     ↓
//                  Store updates
//                     ↓
//                  Components re-render


// "cart" inside createSlice is used for generating action types (e.g., "cart/addItem").
// "cart" inside configureStore defines the key in the global Redux state structure. This is used to access, useSelector(store => store.cart.items)