import React from 'react'
import './Logsign.css'
import { useFormik } from 'formik'

const initialValues = {
    name:"",
    email:"",
    password:""
}

const onSubmit = values => {
    console.log(values)
}

const validate = ()=>{
    let errors = {}

    if(!values.email){
        errors.email = 'Required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }

    if(!values.password){
        errors.password = 'Required'
    }
     
  return errors
 }

export default function Logsign() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    console.log(formik.values);
  return (

    <div className='log w-10/10 max-w-[500px] px-10 py-20 rounded-3xl  bg-white border-2 border-gray-100'>
    <div className='mt-8'>
        
        <div className='flex flex-col text-left'>
            <form onSubmit={formik.handleSubmit}>
                {/* email */}
                <label htmlFor="email">Email</label>
                <input 
                type='email'
                id='email'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your email"/>
             
            </form>
           </div>
        <div className='flex flex-col mt-4 text-left'>
            <form onSubmit={formik.handleSubmit}>
                {/* password */}
                <label htmlFor="password">Password</label>
               <input 
                id='password'
               typeof='password'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your email"
                type={"password"}
            />
            </form>
        </div>
        <div className='mt-8 flex justify-between items-center'>
            <div>
                <input  type="checkbox" id='remember'/>
                <label className='ml-2 font-medium text-base' for="remember">Remember for 30 days</label>
            </div>
            <button className='font-medium text-base text-violet-500'>Forgot password</button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
            <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign in</button> 
        </div>
        <div className='mt-8 flex justify-center items-center'>
            <p className='font-medium text-base'>Don't have an account?</p>
            <button 
                onClick={() => setAuthState('register')}
                className='ml-2 font-medium text-base text-violet-500'>Sign up</button>
        </div>
    </div>
</div>
  )
}
