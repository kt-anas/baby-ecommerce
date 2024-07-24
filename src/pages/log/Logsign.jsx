import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import axios from 'axios';
import { CartContext } from '../../context/CartProvider';

const initialValues = {
  email: "",
  password: ""
}

const Logsign = () => {
  const navigate = useNavigate();
  
  const {setIsLogged,isLogged} = useContext(CartContext);

  const onSubmit = (values, { setSubmitting }) => {
    let adminData=false
    axios.get('http://localhost:3000/users')
      .then((res) => {
        
        // const adminData=res.data.find(item => item.email === 'admin@gmail.com' && item.password === 'boss');

        if(values.email===`admin@gmail.com` && values.password===`boss`){
            adminData=true;
        }
        const findeData = res.data.find(item => item.email === values.email && item.password === values.password);
        const exitData = res.data.find(item => item.email === values.email && item.password !== values.password);
        

        if(adminData){
            
        toast.success('welcome admin');
        localStorage.setItem('id', values.email);
        setIsLogged(true);
         setTimeout(() => navigate("/admin"), 1000);
        }

        else if(findeData) {
            if(findeData.status === 'active') {
          toast.success('Login successful');
          localStorage.setItem('id', findeData.id);
          localStorage.setItem('user', JSON.stringify(findeData));
          setIsLogged(true);
          setTimeout(() => navigate("/"), 1000);
             } else{
               toast.error('User blocked');
             }
         
        } else if (exitData) {
          toast.error('Enter your password correctly')
        } else {
          toast(`OOPS! You don\'t have an account`, {
            icon: '😬',
          });
          setTimeout(() => navigate("/register"), 1000);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setSubmitting(false);
      });
  }




  const validate = (values) => {
    let errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email format'
    }
    if (!values.password) {
      errors.password = 'Required'
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
          <div className="flex flex-col text-left">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your password"
              type="password"
            />
            {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <button className="font-medium text-base text-orange-500">Forgot password</button>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button type="submit" className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-orange-500 rounded-xl text-white font-bold text-lg">
              Sign in
            </button>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <p className="font-semibold text-base">Don't have an account?</p>
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="ml-2 font-semibold text-base text-orange-500">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Logsign;
