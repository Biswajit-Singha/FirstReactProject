import './App.css'
import Form from './components/Form'
import { GoNorthStar } from "react-icons/go";

function App() {

  return (
       <div className='flex w-full h-screen'>
      
       
        <div className='hidden lg:flex h-full w-3/5 items-center justify-center bg-blue-900 m-0'>
         <div className='w-100 h-100 text-gray-50'>
          <GoNorthStar className='ml-2 mb-5 h-12 w-12 font-bold' />
          <h3 className='text-4xl w-full font-semibold mb-5'>Hello <br />SaleSkip!👍</h3>
          <div className='mb-20 text-gray-300'>
             <p>Skip repetitive and manual sales-marketing <br /> tasks.Get highly productive through automation <br />and save tons of time!</p>
          </div>
        
              <p className='mt-50 text-gray-400'>@ 2025 SaleSkip. All rights reserved.</p>
         </div>
        </div>
        <div className='w-full flex items-center justify-center lg:w-1/2'>
        <Form />
        </div>
      
       </div>
  )
}

export default App
