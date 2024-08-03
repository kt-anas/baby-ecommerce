   
 import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

 import axios from 'axios';
 
 const id = localStorage.getItem("id");


export const setCart = createAsyncThunk(
  'cart/setCart',
  ( cartItems, { rejectWithValue }) => {
    return axios.patch(`http://localhost:3000/users/${id}`, { cart: cartItems })
      .then((response) => response.data.cart)
      .catch((error) => rejectWithValue(error.response.data));
  }
);
  


 export const cartSlice = createSlice({
   name: 'cart',
   initialState: {
     cartItems: [],
     updatatedCart: [],
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



     extraReducers: (builder) => {
        builder
          .addCase(setCart.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(setCart.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.updatatedCart = action.payload
            console.log(state.updatatedCart);
            
            // Optionally update state with server response if needed
          })
          .addCase(setCart.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
          });
     
   },
 });
 
 export const { addItem } = cartSlice.actions;
 
 export default cartSlice.reducer;