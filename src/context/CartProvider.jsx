import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
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
 
  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);




  // Update cart count whenever cart changes
  useEffect(() => {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  }, [cart]);

 
  useEffect(() => {
    if (isLogged && id) {
      axios.patch(`http://localhost:3000/users/${id}`, { cart })
        .then(() => console.log('Cart updated'))
        .catch(error => console.error(error));
    }
  }, [cart, isLogged, id]);

  
  useEffect(() => {
    if (id) {
      setIsLogged(true);
    }
  }, [id]);


  const addCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

     
    

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
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
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
