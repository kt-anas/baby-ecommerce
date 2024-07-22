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

const AddProduct = () => {
  const navigate = useNavigate();
  const { setProducts } = useContext(CartContext);

  const onSubmit = async (values, { setSubmitting }) => {
    const newProduct = {
      ...values
      
    };

    try {
      const res = await axios.post('http://localhost:3000/products', newProduct);
      setProducts(prevProducts => [...prevProducts, res.data]);
      toast.success('Product added successfully');
      setTimeout(() => navigate('/admin'), 1000);
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Failed to add product');
    } finally {
      setSubmitting(false);
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    if (!values.price) {
      errors.price = 'Required';
    } else if (isNaN(values.price)) {
      errors.price = 'Price must be a number';
    }
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

