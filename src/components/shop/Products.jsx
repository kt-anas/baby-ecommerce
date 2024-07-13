// import React, { createContext } from 'react'
// import Shop from './Shop'
import { useEffect,useState} from 'react'
 import axios from 'axios';
//  export const productsContext = createContext();

function ProductsProvider() {
    const [products,setProducts] = useState([]);

 useEffect(()=>{
    const fetchProducts = async()=>{
        try{
            const res = await axios.get('http://localhost:3000/products');
           setProducts(res.data)
        }catch(error){
            console.log(error)
        }
    }
    fetchProducts();
 },[])
 
    return(
        <div className="container mx-auto p-4 m-10">
        <h1 className="text-3xl font-bold text-center mb-6">Products List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img className="w-full" src={product.image} alt={product.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">
                  {product.description}
                </p>
              </div>
              <div className="flex px-6 pt-4 pb-2">
                <span className="text-xl font-bold text-gray-900">{product.price}</span>
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">ADD TO CART</button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ProductsProvider; 
