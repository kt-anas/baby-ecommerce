import React, { useEffect,useState } from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import './Home.css'
 import axios from 'axios';import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [best,setBest] = useState([])

    useEffect(()=>{
        /**
         * Fetches the first 3 products from the "products" API endpoint
         * and sets the state variable "products" with the fetched data.
         * Also fetches the next 4 products and sets the state variable "best" with the fetched data.
         * If an error occurs during the fetch, it is logged to the console.
         *
         * @return {Promise<void>} - A promise that resolves when the fetch is complete
         */
        const fetchProduct = async () => {
            try {
                // Fetch the first 3 products from the API endpoint
                const res = await axios.get('http://localhost:3000/products');
                setProducts(res.data.slice(0, 3));  // Set the state variable "products" with the fetched data
                setBest(res.data.slice(4,8)); // Set the state variable "best" with the fetched data
            } catch (error) {
                console.log(error); // Log the error to the console
            }
        };
        fetchProduct();
    },[])

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

        <section className="features-section flex  flex-col justify-center mb-32">
          <h6 className='text-5xl text-center mb-20'>New Arrivals</h6>
          <div className='flex'>
         {products.map((product) => (
          <div key={product.id} onClick={() => navigate(`/shop`)} className="w-full max-w-xs mx-auto rounded overflow-hidden bg-transparent">
            <img className="w-full" src={product.image} alt={product.name} />
            <div className="px-4 py-4">
 
              <p className="text-gray-700 text-base">{product.description}</p>
              <span  className="text-yellow-500 text-2xl" >&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
    
    
           
               
            </div>
          </div>
        ))}
        </div>
        </section>
        
        <section className="features-section flex  flex-col justify-center mb-32">
          <h6 className='text-5xl text-center mb-20'>Best Seller</h6>
          <div className='flex'>
         {best.map((product) => (
          <div key={product.id} onClick={() => navigate(`/shop`)} className="w-full max-w-xs mx-auto rounded overflow-hidden bg-transparent">
            <img className="w-full" src={product.image} alt={product.name} />
            <div className="px-4 py-4">
 
              <p className="text-gray-700 text-base">{product.description}</p>
              <span  className="text-yellow-500 text-2xl" >&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
    
    
           
               
            </div>
          </div>
        ))}
        </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
