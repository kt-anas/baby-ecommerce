import React from 'react'
 import Nav from '../../components/nav/Nav'
 import Products from '../../components/shop/Products'
import Footer from '../../components/footer/Footer'
 
// import productsContext from './Products'
// import { useContext } from 'react'
export default function Shop() {
 
    
  
  return (
    
    <div className='shop'>    
      <Nav/> 
      <Products/>   
      <Footer/>
    </div>
  )
}
