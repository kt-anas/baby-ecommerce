 
import Logsign from './pages/log/Logsign.jsx'
 import Home from './pages/home/Home.jsx'
 import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import './App.css'
import Sign from './pages/Register/Sign.jsx'
 import ShopCart from './components/shop/ShopCart.jsx'
import Shop from './pages/shop/Shop.jsx'
import Clothes from './components/shop/Clothes.jsx'
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
import Payment from './pages/Payment/Payment.jsx'
import ProductAdd from './components/admin/Products/ProductAdd.jsx'
import ProductDetail from './components/admin/Products/ProductDetail.jsx'
import ProductEdit from './components/admin/Products/ProductEdit.jsx'
import { Toaster } from 'react-hot-toast';
import Nursery from './components/shop/Nursery.jsx'
import Toys from './components/shop/Toys.jsx'
import Nutrition from './components/shop/Nutrition.jsx'
 
  // Import the Tailwind CSS file
 
function App() {
   
  return (
   <CartProvider>
      <div className='app'>
        <Toaster/>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about-us' element={<Aboutus/>}/>
        <Route path='/clothes' element={<Clothes/>}/>
        <Route path='/toys' element={<Toys/>}/>
        <Route path='/nursery' element={<Nursery/>}/>
        <Route path='/nutrition' element={<Nutrition/>}/>
        {/* <Route path='/testimonials' element={<Testimonial/>}/> */}
        <Route path='/contact-us' element={<Contactus/>}/>
        <Route path='/cart' element={<ShopCart/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path="/logsign" element={<Logsign />} />
        {/* <Route path='/admin' element={<Admin/>}/> */}
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/register" element={<Sign />} />

        <Route path='/admin' element={<Admin/>}>
            <Route index element={<UserList />} />
            <Route  path="user"  element={<UserList/>}/>
            <Route path="product" element={<ProductList/>}/>
            <Route path="revenue" element={<Revenue/>}/>
        </Route>  
          
        <Route path='/admin/products/add' element={<ProductAdd/>}/>
        <Route path='/admin/products/:productId' element={<ProductDetail/>}/>
        <Route path='/admin/products/edit/:productId' element={<ProductEdit/>}/>
        <Route path='/userDetails/:userId' element={<UserDetail/>}/>
      
      </Routes>
    </Router>
     </div>
   </CartProvider>
  
 

    

 
    
     
  )
}

export default App
