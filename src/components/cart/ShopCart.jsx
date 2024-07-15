import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';
import Nav from '../home/Nav';

const ShopCart = () => {
  const { cart, removeFromCart, handleDecrement, handleIncrement, clearCart, totalPrice } = useContext(CartContext);

  return (
    <>
      <Nav />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <div className='text-2xl'>YOUR CART IS EMPTY.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4">
              {cart.map((item, index) => (
                <div key={item.id} className="p-4 bg-white rounded-lg shadow-lg flex items-center">
                  <img src={item.image} className="w-24 h-24 object-cover rounded-lg mr-4" alt={item.description} />
                  <div className="flex-grow">
                    <p className="text-lg font-semibold">{item.description}</p>
                    <p className="text-gray-700">${item.price} x {item.quantity}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => handleDecrement(index)} className="text-sm bg-gray-300 px-2 py-1 rounded-md mr-2">-</button>
                      <span className="text-lg">{item.quantity}</span>
                      <button onClick={() => handleIncrement(index)} className="text-sm bg-gray-300 px-2 py-1 rounded-md ml-2">+</button>
                      <button onClick={() => removeFromCart(item.id)} className="text-sm bg-red-500 text-white px-2 py-1 rounded-md ml-2">Delete</button>
                    </div>
                  </div>
                  <p className="text-lg font-bold">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold">Total: ${totalPrice}</p>
            </div>
            <div className="mt-4 flex">
              <button className="bg-yellow-900 p-3 text-white mr-4">Payment</button>
              <button onClick={clearCart} className="bg-red-500 p-3 text-white">Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ShopCart;
