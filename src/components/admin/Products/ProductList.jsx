import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:3000/products'); // Replace with your actual API endpoint
                setProducts(res.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
         
           
       <>
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
            <ul className="divide-y divide-gray-200">
                {products.map(product => (
                    <li key={product.id} className="py-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-20 w-20 rounded-md object-cover" src={product.image} alt={product.name} />
                            </div>
                            <div className="ml-4">
                                <p className="text-lg font-semibold text-gray-900">{product.name}</p>
                                <p className="text-sm text-gray-500">{product.description}</p>
                                <p className="text-lg font-semibold text-gray-900">${product.price}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
       </>
    );
}
