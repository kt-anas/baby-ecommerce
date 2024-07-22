import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const ProductEdit = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/products/${productId}`); // Replace with your actual API endpoint
        setProduct(res.data);
      } catch (err) {
        setError('Error fetching product details');
        toast.error('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/products/${productId}`, product); // Replace with your actual API endpoint
      toast.success('Product updated successfully');
      navigate(`/admin/products/${productId}`);
    } catch (err) {
      setError('Error updating product');
      toast.error('Error updating product');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-10 bg-white rounded-3xl border-2 border-gray-100">
        <Toaster />
        <h1 className="text-3xl font-bold mb-4">Edit Product</h1>
        <form onSubmit={handleFormSubmit} className="mt-8">
          <div className="flex flex-col text-left">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="flex flex-col mt-4 text-left">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter product description"
              required
            />
          </div>
          <div className="flex flex-col mt-4 text-left">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter product price"
              required
            />
          </div>
          <div className="flex flex-col mt-4 text-left">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={product.image}
              onChange={handleInputChange}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter product image URL"
              required
            />
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              type="submit"
              className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-orange-500 rounded-xl text-white font-bold text-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
