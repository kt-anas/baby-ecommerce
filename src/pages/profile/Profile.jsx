import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartProvider'


export default function Profile() {
    
const {setIsLogged} =useContext(CartContext);
  return (
    <div>
         <NavLink to="/logsign" onClick={()=>{setIsLogged(false);localStorage.clear()}}  className="text-gray-500  hover:text-white px-3 py-2 rounded-md text-sm font-medium">LogOut</NavLink>
    </div>
  )
}
