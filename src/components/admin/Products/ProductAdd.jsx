import React from 'react'

 import { useContext } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 import { CartContext } from '../../../context/CartProvider';
import toast, { Toaster } from 'react-hot-toast';

const initialValues = {
  name: '',
  description: '',
  price: '',
  image: ''
};

/**
 * Component for adding a new product
 * @returns {JSX.Element} The AddProduct component
 */
const AddProduct = () => {
  const navigate = useNavigate();
  const { setProducts } = useContext(CartContext);

  /**
   * Function to handle form submission for adding a new product
   * @param {object} values - The form values
   * @param {function} setSubmitting - Function to set the submitting state
   */
  const onSubmit = async (values, { setSubmitting }) => {
    // Create a new product object with form values
    const newProduct = {
      ...values
    };

    try {
      // Send a POST request to add the new product
      const res = await axios.post('http://localhost:3000/products', newProduct);
      
      // Update the products state with the new product
      setProducts(prevProducts => [...prevProducts, res.data]);
      
      // Show success message
      toast.success('Product added successfully');
      
      // Navigate to the admin product page after a delay
      setTimeout(() => navigate('/admin/product'), 1000);
    } catch (error) {
      // Handle errors when adding a product
      console.error('Error adding product:', error);
      toast.error('Failed to add product');
    } finally {
      // Set submitting state to false
      setSubmitting(false);
    }
  };

  /**
   * Validate the form values.
   * 
   * @param {object} values - The form values.
   * @returns {object} The validation errors.
   * 
   * The following fields are required:
   *  - name
   *  - description
   *  - price
   *  - image
   * 
   * Price must be a number.
   */
  const validate = (values) => {
    let errors = {};

    // Name is required
    if (!values.name) {
      errors.name = 'Required';
    }

    // Description is required
    if (!values.description) {
      errors.description = 'Required';
    }

    // Price is required and must be a number
    if (!values.price) {
      errors.price = 'Required';
    } else if (isNaN(values.price)) {
      errors.price = 'Price must be a number';
    }

    // Image is required
    if (!values.image) {
      errors.image = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-10 bg-white rounded-3xl border-2 border-gray-100">
        <Toaster />
        <form onSubmit={formik.handleSubmit} className="mt-8">
          {/* Product Name */}
          <div className="flex flex-col text-left">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter product name"
            />
            {formik.touched.name && formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
          </div>
          {/* Description */}
          <div className="flex flex-col mt-4 text-left">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter product description"
            />
            {formik.touched.description && formik.errors.description ? <div className="text-red-500">{formik.errors.description}</div> : null}
          </div>
          {/* Price */}
          <div className="flex flex-col mt-4 text-left">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter product price"
            />
            {formik.touched.price && formik.errors.price ? <div className="text-red-500">{formik.errors.price}</div> : null}
          </div>
          {/* Image URL */}
          <div className="flex flex-col mt-4 text-left">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.image}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter product image URL"
            />
            {formik.touched.image && formik.errors.image ? <div className="text-red-500">{formik.errors.image}</div> : null}
          </div>
          {/* Add Product Button */}
          <div className="mt-8 flex flex-col gap-y-4">
            <button type="submit" className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-orange-500 rounded-xl text-white font-bold text-lg">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

