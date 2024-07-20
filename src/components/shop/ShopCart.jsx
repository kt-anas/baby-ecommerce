import React, { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';
import Nav from '../nav/Nav';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const ShopCart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, handleDecrement, handleIncrement, clearCart, totalPrice } = useContext(CartContext);

  return (
    <>
      <Nav />
      <div className="p-4 md:p-8">
        <h6 className="text-6xl md:text-3xl font-bold mb-36 text-center">Cart</h6>
        {cart.length === 0 ? (
          <div className="text-6xl md:text-2xl text-center">YOUR CART IS EMPTY.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
              {cart.map((item, index) => (
                <div key={item.id} className="p-4 bg-white rounded-lg shadow-lg flex flex-col gap-5 md:flex-row items-center align-center">
                  <img src={item.image} className="w-24 h-24 object-cover rounded-lg md:mr-4 mb-4 md:mb-0" alt={item.description} />
                  <div className="flex-grow flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between flex-grow">
                      <p className="text-lg font-semibold mb-2 md:mb-0">{item.description}</p>
                      <div className="flex items-center gap-2 mt-2 md:ml-4">
                        <button onClick={() => handleDecrement(index)} className="text-sm bg-gray-300 px-2 py-1 rounded-md mr-2">-</button>
                        <span className="text-lg">{item.quantity}</span>
                        <button onClick={() => handleIncrement(index)} className="text-sm bg-gray-300 px-2 py-1 rounded-md ml-2">+</button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-sm bg-red-500 text-white px-2 py-1 rounded-md mt-2 ml-14 md:mt-0 md:ml-4">Remove</button>
                  </div>
                  <p className="text-lg font-bold mt-4 md:mt-0">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-lg md:text-xl font-semibold text-center">Total: ${totalPrice}</p>
            </div>
            <div className="mt-8 flex justify-center">
              <button onClick={() => navigate('/payment')} className="bg-red-500 p-3 text-white mr-4 rounded-xl">Proceed to Payment</button>
              <button onClick={clearCart} className="bg-red-500 p-3 text-white rounded-xl">Clear Cart</button>
            </div>
          </>
        )}
      </div>
      <Toaster/>
    </>
  );
};

export default ShopCart;
