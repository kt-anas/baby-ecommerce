import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';

export default function Profile() {
  const { setIsLogged } = useContext(CartContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-10 bg-white rounded-3xl border-2 border-gray-100 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Profile</h1>
          <NavLink
            to="/logsign"
            onClick={() => {
              setIsLogged(false);
              localStorage.clear();
            }}
            className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-orange-500 transition-colors duration-300"
          >
            LogOut
          </NavLink>
        </div>
        {user ? (
          <div className="bg-white rounded p-4">
            <h2 className="text-xl font-semibold mb-2">User Details</h2>
            <p className="text-gray-700">Name: {user.name}</p>
            <p className="text-gray-700">Email: {user.email}</p>
            {/* Add more user details as needed */}
          </div>
        ) : (
          <p className="text-gray-700">Loading user data...</p>
        )}
      </div>
    </div>
  );
}
