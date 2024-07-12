import React from 'react'
import Nav from '../home/Nav'
import ProductsContext from './Products'
import { useContext } from 'react'
export default function Shop() {
  const products = useContext(ProductsContext)
  return (
    
    <div>
        <Nav/>
         
    </div>
  )
}
