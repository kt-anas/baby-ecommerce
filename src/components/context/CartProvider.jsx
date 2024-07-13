import React from 'react'
import { createContext,useState } from 'react'
export const CartContext = createContext();

export default function CartProvider({children}) {
 const [cart,setCart] = useState([]);
 const [cartCout,setCartCount] =useState(0);

 const addCart = (item)=>{
    
      setCart(prevcart => [...prevcart,item])
      
  }

//  const addToCart = (product)=>{
//     //Set Cart
//     setCart((prevCart) => {
//         const existingProduct = prevCart.find((item) => item.id === product.id);
// ''
//       console.log(existingProduct);
//         if (existingProduct) {
//           return prevCart.map((item) =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//           );
//         } else {
//           return [...prevCart, { ...product, quantity: 1 }];
//         }
//       });
//  };


//remove From cart

 const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };


  //clear Cart 
const clearCart = () => {
    setCart([]);
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
    {children}
  </CartContext.Provider>
  )
}
