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

const Sign = () => {
  const navigate = useNavigate();
  const [validateReg, setValidateReg] = useState(false);

  const onSubmit = (values, { setSubmitting }) => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        const findeData = response.data.find(
          item => item.email === values.email
        );
        if (findeData) {
          setValidateReg(true);
          toast.error("Account already exists");
        } else {
          axios.post('http://localhost:3000/users', values).then((response) => {
            toast.success("Registration Successful");
            setTimeout(() => {
              navigate('/logsign');
            }, 1000);
          }).catch((error) => {
            toast.error("Server timed out");
          });
        }
      })
      .catch(error => {
        toast.error("Server timed out");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-10 bg-white rounded-3xl border-2 border-gray-100">
        <Toaster />
        <form onSubmit={formik.handleSubmit} className="mt-4">
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
            <button type="submit" className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign;
