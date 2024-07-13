 
import Logsign from './components/log/Logsign.jsx'
 import Home from './components/home/Home.jsx'
 import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import './App.css'
import Sign from './components/log/Sign'
 import ShopCart from './components/cart/ShopCart.jsx'
import Shop from './components/shop/Shop.jsx'
import Aboutus from './components/content/Aboutus.jsx'
import Testimonial from './components/content/Testimonial.jsx'
import Contactus from './components/content/Contactus.jsx'
// import ProductsProvider from './components/shop/Products.jsx'



function App() {
   
  return (
 
    <div className='app'>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about-us' element={<Aboutus/>}/>
        <Route path='/testimonials' element={<Testimonial/>}/>
        <Route path='/contact-us' element={<Contactus/>}/>
        <Route path='/cart' element={<ShopCart/>}/>
        <Route path="/logsign" element={<Logsign />} />
        <Route path="/register" element={<Sign />} />
      </Routes>
    </Router>
     </div>
 

    

 
    
     
  )
}

export default App
