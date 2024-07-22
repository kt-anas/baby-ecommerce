import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/products/${productId}`); // Replace with your actual API endpoint
        setProduct(res.data);
      } catch (err) {
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const deleteProduct = async () => {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`); // Replace with your actual API endpoint
      toast.success('Product deleted successfully');
      navigate('/admin/product');
    } catch (err) {
      toast.error('Error deleting product');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster />
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md border-b-2 border-gray-100 py-4 px-6 flex items-center">
        <button
          onClick={() => navigate('/admin/product')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md  "
        >
          Products
        </button>
        <h1 className="text-2xl font-bold flex-grow text-center">Product Details</h1>
      </nav>
      
      {/* Product Details */}
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-2xl p-10 bg-white rounded-3xl border-2 border-gray-100">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <img className="h-80 w-full rounded-md object-cover mb-4" src={product.image} alt={product.name} />
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900">${product.price}</p>
          <div className="flex justify-between mt-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md  "
              onClick={() => navigate(`/admin/products/edit/${productId}`)}
            >
              Edit Product
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              onClick={deleteProduct}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
