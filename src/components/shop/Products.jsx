import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../../context/CartProvider';
import './Products.css';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem,setCart } from './cartSlice';
import { useSelector } from 'react-redux';


const ProductsProvider = () => {
  const [products, setProducts] = useState([]);
  const { addCart,SearchProduct } = useContext(CartContext);
   
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/products');
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  
 
  
    
  return (
    <div className="container mx-auto min-h-screen p-10">
      <h1 className="text-6xl font-bold text-left mb-20 pt-20 pl-10">Shop</h1>
     {/* <div className=' flex gap-3 align-middle ml-10'>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 filter">
     <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
     </svg> 
     <div className='text'>Toys</div>
     <div className='text'>Toys</div>
     <div className='text'>Toys</div>
     <h6>
      Filter
      </h6>
     </div> */}
     <div className="filter">
        <div className=' ml-10 flex gap-3'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 ">
     <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
     </svg> 
     <h6>
      Filter
      </h6>
     </div>
     <div className='btn'>
     <button className='tooltiptext'onClick={() => navigate('/shop')}>All</button>
     <button className='tooltiptext'onClick={()=> navigate('/clothes')}>Clothes</button>
     <button className='tooltiptext'onClick={()=> navigate('/nursery')}>Nursery</button>
     <button className='tooltiptext'onClick={()=> navigate('/nutrition')}>Nutrition</button>
     <button className='tooltiptext'onClick={()=> navigate('/toys')}>Toys</button>
     </div>
     
     </div>


  
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6 mt-20">
   
       
      

        { SearchProduct.map((product) => (
            <div key={product.id} className="w-full max-w-xs mx-auto rounded overflow-hidden bg-transparent">
            <img className="w-full" src={product.image} alt={product.name} />
            <div className="px-4 py-4">
 
              <p className="text-gray-700 text-base">{product.description}</p>
              <span  className="text-yellow-500 text-2xl" >&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
    
    
           
              <button
                className=" hover:bg-red-600 text-white font-bold py-2 px-4 rounded" 
                onClick={() => addCart(product)}
              >
                ADD TO CART
              </button>

              <button onClick={()=>dispatch(addItem(product),dispatch(setCart(cartItems)))}>Add</button>
            </div>
          </div>
      ))}
           <Toaster />
      </div>
    </div>
  );
};

export default ProductsProvider;
