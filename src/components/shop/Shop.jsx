import React from 'react'
import Nav from '../home/Nav'
import Products from './Products'
import Footer from '../home/Footer'
// import productsContext from './Products'
// import { useContext } from 'react'
export default function Shop() {
//   const products = useContext(productsContext)
   
  
  return (
    
    <div className='shop'>
    <Nav/>
          
      <Products/>   
      <Footer/>
    </div>
  )
}
