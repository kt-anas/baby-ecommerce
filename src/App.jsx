 
import Logsign from './pages/log/Logsign.jsx'
 import Home from './pages/home/Home.jsx'
 import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import './App.css'
import Sign from './pages/Register/Sign.jsx'
 import ShopCart from './components/shop/ShopCart.jsx'
import Shop from './pages/shop/Shop.jsx'
import Aboutus from './pages/aboutus/Aboutus.jsx'
// import Testimonial from './components/content/Testimonial.jsx'
import Contactus from './pages/contactus/Contactus.jsx'
// import ProductsProvider from './components/shop/Products.jsx'
import CartProvider from './context/CartProvider.jsx'


function App() {
   
  return (
   <CartProvider>
      <div className='app'>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about-us' element={<Aboutus/>}/>
        {/* <Route path='/testimonials' element={<Testimonial/>}/> */}
        <Route path='/contact-us' element={<Contactus/>}/>
        <Route path='/cart' element={<ShopCart/>}/>
        <Route path="/logsign" element={<Logsign />} />
        <Route path="/register" element={<Sign />} />
      </Routes>
    </Router>
     </div>
   </CartProvider>
  
 

    

 
    
     
  )
}

export default App
