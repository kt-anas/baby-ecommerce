import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Dashboard() {
  return (
    <>
       <div className="w-1/5 bg-orange-500 text-white p-5">
       <h1 className="text-3xl font-bold mb-5">Admin</h1>
        <ul>
        <li className="mb-2">
          <NavLink to="user" activeclassname="font-bold" className="md-2">
            User
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink to="product" activeclassname="font-bold" className="md-2">
            Product
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink to="revenue" activeclassname="font-bold" className="md-2">
            Revenue
          </NavLink>
        </li>
          {/* <li className="mb-2">Users</li>
          <li className="mb-2">Products</li>
          <li className="mb-2">Revenue</li> */}
        
          {/* <li className="mb-2">Orders</li>
          <li className="mb-2">Settings</li> */}
        </ul>

        <NavLink to="/logsign" onClick={()=>{localStorage.clear()}}  className="text-gray-500  hover:text-white px-3 py-2 rounded-md text-sm font-medium">LogOut</NavLink>

      </div>

    </>
  )
}
