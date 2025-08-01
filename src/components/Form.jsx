import React from 'react'
import { FcGoogle } from "react-icons/fc";

export const Form = () => {
  return (
    <div className='h-screen'> 
    <div>
        <h3 className='text-3xl text-black font-bold mt-10 mb-15'>SaleSkip</h3>
      <h4 className='text-3xl text-black font-bold mb-3'>Welcome Back!</h4>
      <p className='mb-6 text-gray-500'>Don't have an account? <link rel="stylesheet" href="" /><a className='text-black font-semibold underline' href="">Create new account now.</a> <br /> it's FREE! Takes less than a minute.</p>
    </div>
     
      <div>
        <div className=''>
         <form>
          
        </form>
        <input 
        type="email"
        placeholder='Enter your email'
        className=' w-full p-1 mb-6 border-b py-2 px-26 border-b-gray-400'
        name=""
        id=""
        />
        </div>
      
       <div>
       <input 
        type="password"
        placeholder='Password'
        className='w-full p-1 mb-6 border-b py-2 px-26 border-b-gray-400 text-left'
        name=""
        id=""

        />
      </div>

      <div>
       
        <button 
        type="submit"
        className='mb-2 border py-3 px-40 rounded bg-black text-amber-50'
        >
          Login Now
        </button>
      </div>

       <div>
        <button className='mb-6 border py-1 px-26 rounded bg-gray-4 border-gray-400 font-semibold flex items-center justify-center'>
          <FcGoogle className='mr-3 h-10 w-10'/> Login with Google 
        </button>
      </div>
      <div className='text-center'>
        <p className='text-gray-500'>Forget password <a className='text-black font-bold underline' href="">Click here</a></p>
      </div>
         
      </div>
     
    </div>
  )
}

export default Form