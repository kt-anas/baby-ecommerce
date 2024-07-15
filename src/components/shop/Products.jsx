import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartProvider';
import './Products.css';

const ProductsProvider = () => {
  const [products, setProducts] = useState([]);
  const { addCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/products');
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  // Function to render star rating based on product's rating
//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//         stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // Filled star
//       } else {
//         stars.push(<span key={i} className="text-gray-400">&#9733;</span>); // Empty star
//       }
//     }
//     return stars;
//   };

  return (
    <div className="container mx-auto min-h-screen p-0">
      <h1 className="text-6xl font-bold text-left mb-40 pt-20 pl-10">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6">
        {products.map((product) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsProvider;
