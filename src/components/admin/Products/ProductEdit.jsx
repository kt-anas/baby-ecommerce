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
/**
     * Fetches a product from the API based on the productId
     * and updates the state variables accordingly.
     */
    const fetchProduct = async () => {
      try {
        // Request product data from the API
        const res = await axios.get(`http://localhost:3000/products/${productId}`); // Replace with your actual API endpoint
        
        // Set the product state with the fetched data
        setProduct(res.data);
      } catch (err) {
        // Handle error when fetching product details
        setError('Error fetching product details');
        toast.error('Error fetching product details');
      } finally {
        // Set loading to false after fetch completes
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

/**
 * Function to handle input change
 *
 * This function is used to update the state of the product object with the new value
 * of the input field that triggered the event.
 *
 * @param {Object} e - Event object
 * @param {string} e.target.name - The name of the input field that triggered the event
 * @param {string} e.target.value - The value of the input field that triggered the event
 */
const handleInputChange = (e) => {
    // Destructure the name and value properties from the event object
    const { name, value } = e.target;

    // Create a new object by spreading the existing product object
    // and updating the property specified by the name to the new value
    setProduct({
        ...product, // Create a new object by spreading the existing product object
        [name]: value, // Update the property specified by the name to the new value
    });
};

/**
 * Function to handle form submission
 *
 * This function is triggered when the form is submitted and sends a PUT request to the API
 * to update the product with the new data.
 *
 * @param {Object} e - Event object
 * @returns {Promise<void>}
 */
const handleFormSubmit = async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  try {
    // Send a PUT request to the API to update the product
    await axios.put(`http://localhost:3000/products/${productId}`, product);  

    // Show success toast message
    toast.success('Product updated successfully');

    // Redirect to the product detail page
    navigate(`/admin/products/${productId}`);
  } catch (err) {
    // Handle error when updating product
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
