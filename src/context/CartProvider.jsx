import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { json } from 'react-router-dom';
import toast from 'react-hot-toast';
// Create Cart Context
export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const id = localStorage.getItem("id");
  const [isLogged, setIsLogged] = useState(false);
  const [users, setUsers] = useState([]);
  const [orderlist, setOrderlist] = useState(["mhg"]);
  const [productslist, setProductslist] = useState([]);
 
  //   total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);




  //  count cart changes
  useEffect(() => {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  }, [cart]);

 
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        // console.log(res.data.cart);
        setCart(res.data.cart);
      })
      .catch((error) => console.log(error));
  }, []);

//   useEffect(() => {
//     if ( id) {
//       axios.patch(`http://localhost:3000/users/${id}`, {cart:[...cart]})
//         .then(() => console.log('Cart updated'))
//         .catch(error => console.error(error));
//     }
//   }, [cart, id]);


  useEffect(() => {
    if (id) {
      setIsLogged(true);
    }
  }, []);



  const addCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
  
      let updatedCart;
      if (existingProduct) {
        // Update quantity if product exists in the cart
        updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new product to the cart
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }
  
      // Sync cart with backend
      if (id) {
        axios.patch(`http://localhost:3000/users/${id}`, { cart: updatedCart })
          .then(() => console.log('Cart updated in backend'))
          .catch(error => console.error('Error updating cart in backend:', error));
      }
  
      return updatedCart;
    });
  
    // Show success toast message
    if (id) {
      toast.success('Product added to the cart');
    } else {
      toast.error('User is not logged in');
    }
  };
  

   

  const handleIncrement = (index) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
  };


  const handleDecrement = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      setCart(newCart);
    }
  };


  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      // Filter out the product to remove
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      
      // Sync cart with backend
      if (id) {
        axios.patch(`http://localhost:3000/users/${id}`, { cart: updatedCart })
          .then(() => console.log('Cart updated in backend'))
          .catch(error => console.error('Error updating cart in backend:', error));
      }
  
      // Return the updated cart
      return updatedCart;
    });
  
    // Show success toast message
    toast.success('Product removed from the cart');
  };
  


  const clearCart = () => {
    setCart([]);
  };




//------------search----------//
const [searchTerm, setSearchTerm] = useState('');
const[products,setProducts]=useState([])



const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
};

useEffect(()=>{
    axios.get(`http://localhost:3000/products`)
    .then(res=>setProducts(res.data))
      
    },[])
     
    
      const SearchProduct= products.filter(item =>
       item.description ?.toLowerCase().includes(searchTerm.toLowerCase())
      );
  


  return (
    <CartContext.Provider value={{ cart, addCart, removeFromCart, clearCart, handleDecrement, handleIncrement, cartCount, totalPrice,handleSearchChange,SearchProduct,
        isLogged, setIsLogged
     }}>
      {children}
    </CartContext.Provider>
  );
}
