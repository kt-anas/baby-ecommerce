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
  const [products, setProducts] = useState([]);

  //   total price
  
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


  useEffect(()=>{
    axios.get(`http://localhost:3000/products`)
    .then(res=>setProducts(res.data))
      
    },[])

  //  count cart changes
  useEffect(() => {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  }, [cart]);

 
  useEffect(() => {
    if (id) {
    axios.get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        // console.log(res.data.cart);
        setCart(res.data.cart);
      })
      .catch((error) => console.log(error));
    }
  }, [id]);

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

 
  /**
   * Adds a product to the cart.
   * If the user is not logged in, an error message is shown.
   * If the product is already in the cart, its quantity is incremented.
   * Otherwise, the product is added to the cart with a quantity of 1.
   * The cart is synced with the backend.
   *
   * @param {Object} product - The product to add to the cart.
   * @return {void}
   */
  const addCart = (product) => {
    
    // Check if the user is logged in
    if(!isLogged) {
      // Show error message if the user is not logged in
      return toast.error('Please login first');
    }

    // Update the cart state
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      let updatedCart;
      if (existingProduct) {
        // If the product already exists in the cart, increment its quantity
        updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      // Sync the cart with the backend
      if (id) {
        axios.patch(`http://localhost:3000/users/${id}`, { cart: updatedCart })
          .then(() => console.log('Cart updated in backend'))
          .catch(error => console.error('Error updating cart in backend:', error));
      }

      return updatedCart;
    });

    // Show success message if the user is logged in
    if (id) {
      toast.success('Product added to the cart');
    } else {
      // Show error message if the user is not logged in
      toast.error('User is not logged in');
    }
  };

//   const handleIncrement = (index) => {
//     setCart((prevCart) => {
//         const newCart = [...prevCart];
//         newCart[index].quantity+=1;
        
//         // Sync updated cart with backend
//         if (id) {
//             axios.patch(`http://localhost:3000/users/${id}`, { cart: newCart })
//                 .then(() => console.log('Cart updated in backend'))
//                 .catch(error => console.error('Error updating cart in backend:', error));
//         }
        
//         return newCart;
//     });
// };

/**
 * This function increments the quantity of a specific item in the cart by a given number.
 * @param {Object} item - The item to be incremented.
 * @param {number} num - The number by which the quantity should be incremented.
 */
const handleIncrement = (item,num)=>{
    /**
     * This function maps over the cart and returns a new array where the quantity of the
     * item with the matching id is incremented by the given number.
     * @param {Object} elem - An item in the cart.
     * @returns {Object} - The updated item.
     */
    let increment = cart.map(elem=>{
      return item===elem.id ? {...elem,quantity:elem.quantity+num}:elem
    })
    // Send a PATCH request to the backend to update the cart with the incremented quantity.
    axios.patch(`http://localhost:3000/users/${id}`,{cart:increment})
    // Update the cart state with the incremented quantity.
    setCart(increment)
}


// const handleDecrement = (index) => {
//     setCart((prevCart) => {
//         const newCart = [...prevCart];
//         if (newCart[index].quantity > 1) {
//             newCart[index].quantity--;
            
//             // Update backend only if user is logged in
//             if (id) {
//                 axios.patch(`http://localhost:3000/users/${id}`, { cart: newCart })
//                     .then(() => console.log('Cart updated in backend'))
//                     .catch(error => console.error('Error updating cart in backend:', error));
//             }
            
//             return newCart;
//         }
        
//         // Return previous cart if quantity is not greater than 1
//         return prevCart;
//     });
// };

/**
 * This function handles the decrement of the quantity of a specific item in the cart by a given number.
 * It updates the cart state and sends a PATCH request to the backend to reflect the changes.
 * @param {Object} item - The item to be decremented.
 * @param {number} num - The number by which the quantity should be decremented.
 */
const handleDecrement = (item, num) => { // this will decrease the cart product by the button
    /**
     * Map over the cart and return a new array where the quantity of the
     * item with the matching id is decremented by the given number.
     * @param {Object} elem - An item in the cart.
     * @returns {Object} - The updated item.
     */
    let decrement = cart.map(elem => {
        return item === elem.id ? { ...elem, quantity: elem.quantity - num } : elem;
    })
    .filter((elem) => elem.quantity >= 0); // remove the product from the cart if the quantity is less than 0
    axios.patch(`http://localhost:3000/users/${id}`, { cart: decrement });
    setCart(decrement);
}

       


    
  


  /**
   * Remove a product from the cart.
   *
   * @param {string} productId - The ID of the product to remove.
   * @return {void}
   */
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      // Filter out the product to remove
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      
      // Sync cart with backend
      if (id) {
        // Make a PATCH request to update the user's cart in the backend
        axios.patch(`http://localhost:3000/users/${id}`, { cart: updatedCart })
          .then(() => console.log('Cart updated in backend'))
          .catch(error => console.error('Error updating cart in backend:', error));
      }
  
      // Return the updated cart
      return updatedCart;
    });
  
    // Show success toast message
    // Indicate that the product was successfully removed from the cart
    toast.success('Product removed from the cart');
  };
  


  /**
   * Clear the cart by setting it to an empty array.
   *
   * @return {void}
   */
  const clearCart = () => {
    // Set the cart to an empty array, effectively clearing the cart
    // This will remove all products from the cart
    setCart([]);
  };




//------------search----------//
const [searchTerm, setSearchTerm] = useState('');
 



/**
 * Handles the change event of the search input field.
 * Updates the search term state with the new value from the input field.
 *
 * @param {Object} event - The event object representing the change event.
 * @param {string} event.target.value - The new value of the search input field.
 */
const handleSearchChange = (event) => {
  // Update the search term state with the new value from the input field
  setSearchTerm(event.target.value);
};

 //set product list
useEffect(()=>{
    axios.get(`http://localhost:3000/products`)
    .then(res=>setProducts(res.data))
      
    },[])
     
    
      const SearchProduct= products.filter(item =>
       item.description ?.toLowerCase().includes(searchTerm.toLowerCase())
      );
  


  return (
    <CartContext.Provider value={{ cart,totalPrice, addCart, removeFromCart, clearCart, handleDecrement, handleIncrement, cartCount,handleSearchChange,SearchProduct,
        isLogged, setIsLogged,setProducts
     }}>
      {children}
    </CartContext.Provider>
  );
}
