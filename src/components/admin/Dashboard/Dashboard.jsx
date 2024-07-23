import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Dashboard() {
  return (
    <>
       <div className="w-1/6 bg-orange-500 text-white p-5">
       <h1 className="text-3xl font-bold mb-5">Admin</h1>
        <ul>
        <li className="mb-2 flex gap-2 justify-start items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
       </svg>

          <NavLink to="user" activeclassname="font-bold" className="md-2">
            User
          </NavLink>
        </li>
        <li className="mb-2 flex gap-2 justify-start items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>

          <NavLink to="product" activeclassname="font-bold" className="md-2">
            Product
          </NavLink>
        </li>
        <li className="mb-2 flex gap-2 justify-start items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
         <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
         </svg>

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
<div className='mt-10'>
    
<NavLink to="/logsign" onClick={()=>{localStorage.clear()}}  className="text-white-500  hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">LogOut</NavLink>

</div>
      </div>

    </>
  )
}
