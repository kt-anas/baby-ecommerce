import React, { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';
import Nav from '../nav/Nav';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const ShopCart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, handleDecrement, handleIncrement, clearCart, totalPrice } = useContext(CartContext);

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-4">
        <div className="w-full max-w-4xl p-4 md:p-12 bg-white rounded-3xl border-2 border-gray-200 ">
          <h6 className="text-4xl md:text-3xl font-bold mb-5 text-center">Cart</h6>
          {cart.length === 0 ? (
            <div className="text-4xl md:text-2xl text-center">YOUR CART IS EMPTY.</div>
          ) : (
            <>
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg  border border-gray-200">
                    <img src={item.image} className="w-24 h-24 object-cover rounded-lg mb-4 mr-4 md:mb-0" alt={item.description} />
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full justify-between">
                      <div className="flex flex-col items-center md:items-start  md:text-left">
                        <p className="text-lg font-semibold mb-2">{item.description}</p>
                        <div className="flex   gap-2">
                          <button onClick={() => handleDecrement(item.id, 1)} className="text-sm bg-gray-300 px-2 py-1 rounded-md hover:bg-gray-400 transition duration-300">-</button>
                          <span className="text-lg">{item.quantity}</span>
                          <button onClick={() => handleIncrement(item.id, 1)} className="text-sm bg-gray-300 px-2 py-1 rounded-md hover:bg-gray-400 transition duration-300">+</button>
                        </div>
                      </div>
                      <div className="flex flex-col items-center md:items-end ">
                        <p className="text-lg font-bold ">${(item.price * item.quantity).toFixed(2)}</p>
                        <button onClick={() => removeFromCart(item.id)} className="text-sm bg-red-500 text-white px-2 py-1 rounded-md mt-2 hover:bg-red-600 transition duration-300">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg md:text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
                <button onClick={() => navigate('/payment')} className="bg-orange-500 p-4 text-white rounded-xl  transition duration-300 w-full">Proceed to Payment</button>
                <button onClick={clearCart} className="bg-red-500 p-4 text-white rounded-xl hover:bg-red-600 transition duration-300 w-full">Clear Cart</button>
              </div>
            </>
          )}
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default ShopCart;
