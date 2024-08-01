 import { createAsyncThunk } from "@reduxjs/toolkit";

 import axios from "axios";
 import { useSelector } from "react-redux";

 
 const products = useSelector(state => state.cart.cartItems)


 
 export const syncCartWithServer = createAsyncThunk(
    
     
     "cart/syncCartWithServer",
     console.log(products),
   async (userId,{rejectWithValue}) => {
     try {
       const response = await axios.get(`http://localhost:3000/users/${userId}`);
       return response.data.cart;
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   });