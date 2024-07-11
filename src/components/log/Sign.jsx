import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const initialValues = {
    name:"",
    email:"",
    password:""
}

const onSubmit = (values) => {
    console.log("form data",values)
}

const validationSchema = Yup.object({
    email:Yup.string().email("Invalid email format").required("Required !"),
    password:Yup.string().required("Required !")
})


const validate = (values)=>{
    
    let errors = {}
    if(!values.name){
        errors.name = 'Required'
    }
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



export default function Sign() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
        validationSchema
    })
 
 
  return (
    <div className='log w-10/10 max-w-[500px] px-10 py-20 rounded-3xl  bg-white border-2 border-gray-100'>
    <div className='mt-4'>
    <div className='flex flex-col mt-4 text-left'>
            <form onSubmit={formik.handleSubmit}>
                {/* password */}
                <label htmlFor="name">Name</label>
               <input 
                id='name'
                type='text'
                name='name'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.name}
                {...formik.getFieldProps('name')}

                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your name"
                 
            />
            </form>
            {formik.touched.name && formik.errors.name ? <div className='text-red-500 '>{formik.errors.name}</div>: null}

        </div>

        <div className='flex flex-col text-left'>
            <form onSubmit={formik.handleSubmit}>
                {/* email */}
                <label htmlFor="email">Email</label>
                <input 
                type='email'
                id='email'
                name='email'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
                
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your email"
                {...formik.getFieldProps('email')}/>
            
            </form>
            {formik.touched.email && formik.errors.email? <div className='text-red-500'>{formik.errors.email}</div> :null}
           </div>

        <div className='flex flex-col mt-4 text-left'>
            <form onSubmit={formik.handleSubmit}>
                {/* password */}
                <label htmlFor="password">Password</label>
               <input 
                id='password'
                typeof='password'
                name='password'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.password}
                {...formik.getFieldProps('password')}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your password"
                type={"password"}
            />
            </form>
            {formik.touched.password && formik.errors.password ? <div className='text-red-500 '>{formik.errors.password}</div>: null}

        </div>
        <div className='mt-8 flex justify-between items-center'>
            
            <button className='font-medium text-base text-violet-500'>Confirm Password</button>
        </div>
        <div className='flex flex-col mt-4 text-left'>
            <form onSubmit={formik.handleSubmit}>
               <input 
                id='password'
                typeof='password'
                name='password'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.password}
                {...formik.getFieldProps('password')}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your password"
                type={"password"}
            />
            </form>
            {formik.touched.password && formik.errors.password ? <div className='text-red-500 '>{formik.errors.password}</div>: null}

        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
            <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign Up</button> 
        </div>
        
        
    </div>
</div>
  )
}
