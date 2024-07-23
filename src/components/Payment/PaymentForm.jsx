import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { CartContext } from '../../context/CartProvider';

const PaymentForm = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const initialValues = {
    accNumber: "",
    securityCode: ""
  }

  /**
   * Submit the payment form and handle the payment process.
   *
   * @param {Object} values - The form values.
   * @param {Object} options - The form options.
   * @param {Function} options.setSubmitting - The function to set form submitting status.
   * @return {Promise<void>} - A promise that resolves when the payment process is complete.
   */
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      // Make a POST request to the payment endpoint with the form values and the total amount
      // of the cart items.
      const res = await axios.post('http://localhost:3000/payment', {
        ...values,
        amount: cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
      });

      // Show a success message and navigate to the home page after a delay.
      toast.success('Payment successful');
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      // Show an error message if the payment fails.
      toast.error('Payment failed');
    } finally {
      // Set the form submitting status to false.
      setSubmitting(false);
    }
  }

  /**
   * Validate the payment form values.
   *
   * @param {Object} values - The form values.
   * @returns {Object} The validation errors.
   *
   * The following fields are required:
   *  - accNumber
   *  - securityCode
   */
  const validate = (values) => {
    let errors = {}

    // Check if account number is required
    if (!values.accNumber) {
      errors.accNumber = 'Required'
    }

    // Check if security code is required
    if (!values.securityCode) {
      errors.securityCode = 'Required'
    }

    return errors
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
    // validationSchema
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-10 bg-white rounded-3xl border-2 border-gray-100">
        <Toaster />
        <form onSubmit={formik.handleSubmit} className="mt-8">
          <h2 className='text-2xl font-bold mb-6 text-center'>Payment</h2>
          <div className="flex flex-col text-left">
            <label htmlFor="accNumber">ACC NUMBER:</label>
            <input
              type="text"
              id="accNumber"
              name="accNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.accNumber}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your account number"
            />
            {formik.touched.accNumber && formik.errors.accNumber ? <div className="text-red-500">{formik.errors.accNumber}</div> : null}
          </div>
          <div className="flex flex-col mt-4 text-left">
            <label htmlFor="price">TOTAL PRICE:</label>
            <div className='text-center text-2xl font-bold'>
              {cart.reduce((acc, item) => acc + item.quantity * item.price, 0)} .Rs
            </div>
          </div>
          <div className="flex flex-col mt-4 text-left">
            <label htmlFor="securityCode">Security Code:</label>
            <input
              id="securityCode"
              name="securityCode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.securityCode}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your security code"
              type="password"
            />
            {formik.touched.securityCode && formik.errors.securityCode ? <div className="text-red-500">{formik.errors.securityCode}</div> : null}
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button type="submit" className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-red-500 rounded-xl text-white font-bold text-lg">
              Pay Now!
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PaymentForm;
