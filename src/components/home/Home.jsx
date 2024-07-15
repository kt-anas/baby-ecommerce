import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './Home.css'
 
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <main className=" min-h-screen">
        <section className="hero-section flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold  mb-4">Baby Essential Fashion & Nursery</h1>
            <p className="text-lg  mb-8 max-w-md mx-auto">Explore our collection of baby essentials and nursery items.</p>
            <button
              onClick={()=>navigate('/shop')}
                className=" hover:bg-red-600 text-white font-bold py-2 px-4 rounded" >
                SHOP NOW
              </button>
          </div>
        </section>

        <section className="features-section flex">
          <div className="w-1/2 bg-gray-200 h-screen">
            <div className="flex items-center justify-center h-full">
              <h2 className="text-3xl text-gray-800 font-bold">Discover Our Products</h2>
             
            </div>
          </div>
          <div className="w-1/2 bg-gray-300 h-screen">
            <div className="flex items-center justify-center h-full">
              <h2 className="text-3xl text-gray-800 font-bold">Our Story</h2>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
