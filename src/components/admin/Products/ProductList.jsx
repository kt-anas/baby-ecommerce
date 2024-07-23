import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const limit = 7;

    const navigate = useNavigate();

    useEffect(() => {
/**
         * Asynchronously fetches products from the server and updates the state accordingly.
         * Sets loading state to true before fetching, and false after fetching.
         * If an error occurs during fetching, sets an error message and logs the error.
         */
        const fetchProducts = async () => {
            setLoading(true); // Set loading state to true
            try {
                const res = await axios.get('http://localhost:3000/products'); // Fetch products from the server
                setProducts(res.data); // Set the products state with the fetched data
            } catch (error) {
                setError('Error fetching products'); // Set error message
                console.error('Error fetching products:', error); // Log the error
            } finally {
                setLoading(false); // Set loading state to false
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const currentProducts = filteredProducts.slice((page - 1) * limit, page * limit);
    const totalPages = Math.ceil(filteredProducts.length / limit);

    /**
     * Navigates to the next page of products.
     * @param {number} prevPage - The current page number.
     * @returns {number} - The new page number.
     */
    const nextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
        /**
         * This is a comment explaining what the code does.
         * It sets the new page number to the minimum of the previous page number + 1 and the total number of pages.
         */
    };

    /**
     * Navigates to the previous page of products.
     * @param {number} prevPage - The current page number.
     * @returns {number} - The new page number.
     */
    const previousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
        /**
         * This is a comment explaining what the code does.
         * It sets the new page number to the maximum of the previous page number - 1 and 1.
         * This ensures we don't navigate to a page number less than 1.
         */
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Products</h2>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => navigate('/admin/products/add')}
                >
                    Add Product
                </button>
            </div>
            <div className="mb-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border p-2 rounded-md w-1/3 bg-gray-100"
                />
            </div>
            <ul className="divide-y divide-gray-200">
                {currentProducts.map(product => (
                    <li key={product.id}
                        className="py-4 cursor-pointer"
                        onClick={() => navigate(`/admin/products/${product.id}`)}
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
            <div className="flex justify-between mt-4">
                <button
                    onClick={previousPage}
                    disabled={page === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span>
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </>
    );
}
