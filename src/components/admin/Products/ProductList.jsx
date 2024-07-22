import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
export default function ProductList() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

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

    /**
     * Add a new product to the list
     * 
     * Makes a POST request to the API to add a new product
     * and updates the local state with the response
     */
    const addProduct = async () => {
        const newProduct = {
            id: Date.now(), // Example unique ID, use a proper ID in real application
            name: 'New Product',
            description: 'Description of new product',
            price: 99.99,
            image: 'https://via.placeholder.com/150' // Placeholder image URL
        };

        try {
            // Replace with your actual API endpoint
            const res = await axios.post('http://localhost:3000/products', newProduct);
            // Update the local state with the new product
            setProducts([...products, res.data]);
        } catch (error) {
            // Handle any errors that occur
            console.error('Error adding product:', error);
        }
    };

    return (
        <>
           <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Product List</h2>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={()=>navigate('/admin/products/add')}
                >
                    Add Product
                </button>
            </div>
            <ul className="divide-y divide-gray-200">
                {products.map(product => (
                    <li key={product.id}
                     className="py-4"
                     onClick={()=>navigate(`/admin/products/${product.id}`)}
                     >
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
