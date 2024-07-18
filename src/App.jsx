 
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
import Profile from './pages/profile/Profile.jsx'
import Admin from './pages/admin/Admin.jsx'
import UserList from './components/admin/User/UserList.jsx'
import ProductList from './components/admin/Products/ProductList.jsx'
import Revenue from './components/admin/Revenue/Revenue.jsx'
import UserDetail from './components/admin/User/UserDetail.jsx'

  // Import the Tailwind CSS file
 
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
        {/* <Route path='/admin' element={<Admin/>}/> */}
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/register" element={<Sign />} />
        <Route path='/admin' element={<Admin/>}>
            <Route path="user" element={<UserList/>}/>
            <Route path="product" element={<ProductList/>}/>
            <Route path="revenue" element={<Revenue/>}/>
        </Route>    
            <Route path='/useDetails' element={<UserDetail/>}/>
      
      </Routes>
    </Router>
     </div>
   </CartProvider>
  
 

    

 
    
     
  )
}

export default App
