 import { Link } from 'react-router-dom'
 import { FaGoogle,FaGithub } from "react-icons/fa";

const Base = () => {
  return (
    <div>
      <div>
          <div className='flex items-center justify-center px-4 h-[120vh] bg-green-950 '>
              <div className='bg-white max-w-sm p-8'>
                <h2 className='text-green-800 font-bold text-center text-2xl mb-6'>Login</h2>
        
                <form className='space-y-4'>
                  <input
                    type="email"
                    placeholder='Email'
                    className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                    name=""
                    id="" />
        
                  <input
                    type="Password"
                    placeholder='Passward'
                    className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                    name=""
                    id="" />
        
                    <p className='text-right hover:text-green-500 cursor-pointer hover:underline'>
                      Forgot Passward
                    </p>
        
                    <button 
                    type='submit'
                    className='w-full text-white bg-green-700 py-2 rounded hover:bg-green-800 cursor-pointer'
                    >
                      Login
                    </button>
                </form>
        
                {/* Divider here */}
        
                <div className='flex items-center my-6 '>
                  <div className='flex-grow h-px bg-gray-700'></div>
                  <span className='mx-4 text-gray-500 text-sm'>OR</span>
                  <div className='flex-grow h-px bg-gray-700'></div>
                </div>
        
                <div className='flex flex-col space-y-3 mt-6 text-white'>
                  <button className='bg-red-600 py-2 rounded hover:bg-red-700 cursor-pointer flex items-center justify-center'>
                    Login with Google <FaGoogle className='ml-1' />
                  </button>
        
                  <button className='bg-gray-800 py-2 rounded hover:bg-gray-900 cursor-pointer flex items-center justify-center'>
                    Login with GitHub <FaGithub className='ml-1'/>
                  </button>
                </div>
                <div className='text-center mt-5'>
                  <p className='text-sm'>
                    Don't have an account? <Link to={'/register'} className='text-green-700 font-semibold hover:underline'>Register Here</Link>
        
                  </p>
                </div>
              </div>
            </div>
      </div>
      </div>
  )
}

export default Base
