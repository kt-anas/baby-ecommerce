import React, { createContext } from 'react'
// import Shop from './Shop'
import { useState } from 'react'

const ProductsContext = createContext();

export  function Products({children}) {
    const [prodects] = useState([
        { id: 1,
             name: 'Baby Shirt',
              description: 'Comfortable cotton shirt for babies.', 
              price: '$10',
              image: 'https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-12.jpg' 
            },
             { id: 2,
                name: 'Baby Shirt',
                 description: 'Comfortable cotton shirt for babies.', 
                 price: '$10',
                 image: 'https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-12.jpg' 
               },
    ])
  return (
     <ProductsContext.Provider value={prodects}>
         {children}
     </ProductsContext.Provider>
  );
};

export default ProductsContext;
