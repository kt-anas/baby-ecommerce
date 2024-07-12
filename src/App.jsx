 
import Logsign from './components/log/Logsign.jsx'
 import Home from './components/home/Home.jsx'
 import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import './App.css'
import Sign from './components/log/Sign'
import Shop from './components/shop/Shop.jsx'
// import ProductsProvider from './components/shop/Products.jsx'



function App() {
   
  return (
 
    <div className='app'>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path="/logsign" element={<Logsign />} />
        <Route path="/register" element={<Sign />} />
      </Routes>
    </Router>
     </div>
 

    

 
    
     
  )
}

export default App
