
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../components/shop/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default store;