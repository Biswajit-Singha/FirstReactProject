import React from 'react'
import { Link, Links } from 'react-router-dom'
import Base from '../auth/Base'

const HeroSection = () => {
  return (
<div>

    <div className='flex flex-col  text-white items-center text-center px-4 justify-center h-[100vh]' style={{
      backgroundImage: "url('/src/assets/Herobg2.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center' 
    }} >
      <Link to={'/Base'}>
          <button className="hidden md:block bg-white text-black px-5 py-2 rounded cursor-pointer hover:bg-slate-400"> Login </button>
</Link>

      <h2 className='text-4xl md:text-6xl mb-4'> Welcome to My Website </h2>
      <p className='text-lg md:text-xl mb-4'> Your Journey Start Here. </p>
      <button className=' bg-white text-indigo-600 font-medium cursor-pointer hover:bg-gray-300 px-6 py-2 rounded-md'>Purchase Products </button>
    </div>
    </div>
  )
}

export default HeroSection
