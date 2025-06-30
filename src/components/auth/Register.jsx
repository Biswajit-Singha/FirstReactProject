import { Link } from 'react-router-dom'
import { FaGoogle,FaGithub,FaEye,FaEyeSlash  } from "react-icons/fa";
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';


const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [confirmPass, setConfirmPass] = useState(false);

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const fullname = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpass = e.target.confirmpass.value;

    createUserWithEmailAndPassword(auth,email,password)
    .then(result => {
       const user = result.user;
       console.log(user);
    })
    .catch((err) => {
      console.error(err);
    })

  }

  return (
    <div className='flex items-center justify-center px-4 h-[135vh] bg-green-950 '>
      <div className='bg-white max-w-lg p-8'>
        <h2 className='text-green-800 font-bold text-center text-2xl mb-6'>Register</h2>

        <form onSubmit={handleRegisterForm} className='space-y-4'>
          <input
            type="text"
            placeholder='Full Name'
            className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
            name="name"
            id=""
            required
             />

         
           <input
            type="email"
            placeholder='Email'
            className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
            name="email"
            id=""
            required 
            />

            {/* only password */}

         <div className='relative flex items-center'>
           <input
            type={showPass ? 'text' : 'password'}
            placeholder='Password'
            className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
            name="password"
            id="" 
            required
            />

            {
              showPass ? <FaEyeSlash onClick={() => setShowPass(!showPass)} className='absolute right-3 cursor-pointer hover:text-green-600'/> 
              : 
              < FaEye onClick={() => setShowPass(!showPass)} className='absolute right-3 cursor-pointer hover:text-green-600' /> 
            }

           
         </div>
           
           {/* confirm password */}
           <div className='relative flex items-center'>
               <input
            type={confirmPass ? 'text' : 'password'}
            placeholder=' Confirm Password'
            className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
            name="confirmpass"
            id="" 
            required
            />

            {
              confirmPass ? <FaEyeSlash onClick={() => setConfirmPass(!confirmPass)} className='absolute right-3 cursor-pointer hover:text-green-600'/> 
              : 
              < FaEye onClick={() => setConfirmPass(!confirmPass)} className='absolute right-3 cursor-pointer hover:text-green-600'/>
            }

             
           </div>
          

          <div className='flex items-center justify-between'>
            <p>
              <input type="checkbox"
                name=""
                id="checkBox"
                required
              />

              <label htmlFor="checkBox"> Accept Terms & <Link className='text-green-500'>Conditions</Link></label>

            </p>
            <p className='text-right hover:text-green-500 cursor-pointer hover:underline'>
              Forgot Passward
            </p>
          </div>



          <button
            type='submit'
            className='w-full text-white bg-green-700 py-2 rounded hover:bg-green-800 cursor-pointer'
          >
            Register Now
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
            Register with Google <FaGoogle className='ml-1' />
          </button>

          <button className='bg-gray-800 py-2 rounded hover:bg-gray-900 cursor-pointer flex items-center justify-center'>
            Register with GitHub <FaGithub className='ml-1' />
          </button>
        </div>
        <div className='text-center mt-5'>
          <p className='text-sm'>
            Already have an account? <Link to={'/login'} className='text-green-700 font-semibold hover:underline'>Login Here</Link>

          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
