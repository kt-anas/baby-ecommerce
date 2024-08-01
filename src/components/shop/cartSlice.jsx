   
 import { createSlice } from '@reduxjs/toolkit';

 export const cartSlice = createSlice({
   name: 'cart',
   initialState: {
     cartItems: [],
   },
   reducers: {
     addItem: (state, action) => {
        const product = action.payload;
        const existingItem = state.cartItems.find((item) => item.id === product.id);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.cartItems.push({ ...product, quantity: 1 });
        }
     },
     
   },
 });
 
 export const { addItem } = cartSlice.actions;
 
 export default cartSlice.reducer;