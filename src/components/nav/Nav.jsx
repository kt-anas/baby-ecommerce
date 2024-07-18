import React, { useContext, useState } from 'react';

import './Nav.css';
import Logo from '../../assets/img/baby-store-logo.svg';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
 
import { CartContext } from '../../context/CartProvider';

export default function Nav() {

    const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
const {handleSearchChange,isLogged,setIsLogged} =useContext(CartContext);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };


  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-28 w-28" src={Logo} alt="Workflow" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/" className="text-gray-500  hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                <NavLink to="/shop" className="text-gray-500  hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shop</NavLink>
                <NavLink to="/about-us" className="text-gray-500  hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</NavLink>
                {/* <NavLink to="/testimonials" className="text-gray-500  hover:text-white px-3 py-2 rounded-md text-sm font-medium">Testimonial</NavLink> */}
                <NavLink to="/contact-us" className="text-gray-500  hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              onFocus={()=>navigate('/shop')}
              onChange={handleSearchChange}
              className="bg-gray-200 text-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2    focus:ring-orange-300"
            />
          </div>
          <div className="flex items-center space-x-4">
            <NavLink to='/cart'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="currentColor" className="h-6 w-6 text-gray-500 hover:text-gray-700">
                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
              </svg>
            </NavLink>
           {(isLogged) ? (
            <NavLink to='/profile'>
            <div className="h-6 w-6 rounded-full  hover:text-gray-700">  <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user" alt="avatars" className='rounded-full'/></div> 
           </NavLink> 
        ):(
            <NavLink to="/logsign" className="text-gray-500  hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</NavLink>
             
         ) }
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fillRule="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fillRule="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/" className="text-gray-500  hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</NavLink>
          <NavLink to="/shop" className="text-gray-500  hover:text-white block px-3 py-2 rounded-md text-base font-medium">Shop</NavLink>
          <NavLink to="/about-us" className="text-gray-500  hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</NavLink>
          {/* <NavLink to="/testimonials" className="text-gray-500  hover:text-white block px-3 py-2 rounded-md text-base font-medium">Testimonial</NavLink> */}
          <NavLink to="/contact-us" className="text-gray-500  hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</NavLink>
          <div className="pt-2 pb-3 border-t border-gray-700">
            <input
              type="text"
              placeholder="Search..."
              onFocus={()=>navigate('/shop')}
              className="text-white  block w-full rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
