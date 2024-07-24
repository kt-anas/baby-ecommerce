import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

/**
 * Sign component is a form for user registration.
 *
 * It handles form submission and displays error messages if the form is invalid.
 * It also navigates to the login page after successful registration.
 */
const Sign = () => {
  // Navigate to a specific route
  const navigate = useNavigate();

  // State to handle validation errors
  const [validateReg, setValidateReg] = useState(false);

  /**
   * Submit the form and handle registration or error messages.
   *
   * @param {Object} values - The form values.
   * @param {Object} options - The form options.
   * @param {Function} options.setSubmitting - The function to set form submitting status.
   */
  const onSubmit = (values, { setSubmitting }) => {
    // Fetch the list of users from the server
    axios.get('http://localhost:3000/users')
      .then(response => {
        // Check if the user already exists
        const findeData = response.data.find(
          item => item.email === values.email
        );

        if (findeData) {
          // Display an error message if the user already exists
          setValidateReg(true);
          toast.error("Account already exists");
        } else {
          // Register the new user
          const userWithStatus = { ...values, status: 'active',cart:[],order:[] };
          axios.post('http://localhost:3000/users', userWithStatus)
            .then((response) => {
              // Display a success message and navigate to the login page after 1 second
              toast.success("Registration Successful");
              setTimeout(() => {
                navigate('/logsign');
              }, 1000);
            })
            .catch((error) => {
              // Display an error message if the server timed out
              toast.error("Server timed out");
            });
        }
      })
      .catch(error => {
        // Display an error message if the server timed out
        toast.error("Server timed out");
      })
      .finally(() => {
        // Set the form submitting status to false
        setSubmitting(false);
      });
  };

  // Initialize formik with initial values, onSubmit function, and validation schema
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Form container */}
      <div className="w-full max-w-md p-10 bg-white rounded-3xl border-2 border-gray-100">
        <Toaster /> {/* Toast notification */}
        <form onSubmit={formik.handleSubmit} className="mt-4">
          {/* Form fields */}
          <div className="flex flex-col mt-4 text-left">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              {...formik.getFieldProps('name')}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your name"
            />
            {formik.touched.name && formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              {...formik.getFieldProps('email')}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
          </div>

          <div className="flex flex-col mt-4 text-left">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              {...formik.getFieldProps('password')}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your password"
              type="password"
            />
            {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
          </div>

          <div className="flex flex-col mt-4 text-left">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              {...formik.getFieldProps('confirmPassword')}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Confirm your password"
              type="password"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="text-red-500">{formik.errors.confirmPassword}</div> : null}
          </div>

          <div className="mt-8 flex flex-col gap-y-4">
            <button type="submit" className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-orange-500 rounded-xl text-white font-bold text-lg">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign;
