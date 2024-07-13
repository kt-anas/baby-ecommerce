import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';
 import Nav from '../home/Nav'
const ShopCart = () => {
  const { cart,addToCart, removeFromCart, clearCart } = useContext(CartContext);

  return (

    <>
     <Nav/>
    <div className='text-5xl'>Cart</div>
    <div className="container max-auto p-4 bg-slate-600">
         <h1 className='text-3xl font-bold text-ceter mb-6'>Shoping Cart</h1>
      /*if*/   <p className='text-center font-bold'>Cart is empty</p>
     
     <div>
        <ul>
            <li className='bg-white shadow-lg rounded-lg p-4 mb-4'>
                <div className="flex justify-around items-center">
                    <img src="" alt="shirt" />
                    <div>
                        <h2 className="text-xl font-bold">shirt</h2>
                        <p>Price:</p>
                        <p>Quantity:</p>
                    </div>
                    <button className='bg-red-600 hover:bg-red-800 text-white font-bold px-4 py-2 rounded'>
                        Removie
                    </button>
                </div>
            </li>
        </ul>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4'>Clear Cart

        </button>
     </div>
    </div>
    </>
   
  );
};

export default ShopCart;
