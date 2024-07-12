// import React, { createContext } from 'react'
// import Shop from './Shop'
import { useState,useEffect } from 'react'
 import axios from 'axios';
//  export const productsContext = createContext();

function ProductsProvider() {
 useEffect(()=>{
    const fetchProducts = async()=>{
        try{
            const res = await axios.get('http://localhost:3000/products');
           const value = JSON.parse(res.data)
           console.log(value)
        }catch(error){
            console.log(error)
        }
    }
    fetchProducts();
 },[])
    return(
        <div>hello</div>
  );
};

export default ProductsProvider; 
