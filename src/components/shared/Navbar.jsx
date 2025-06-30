import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, Links, useLocation } from "react-router-dom";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/')
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname || '/');
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleLinkClick = (path) => {
    setActiveLink(path);
  }

  return (
    <div>
    <nav className="bg-black/50 text-white py-2 md:py-8 fixed w-full top-0" >
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-xl font-bold "> Simple React</h3>
      
        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu}>
            {
              isOpen ? <IoClose /> : <FaBars />
            }

          </button>
        </div>

        <ul className="hidden md:flex space-x-4 md:space-x-6">
          <li>
            <Link
              to={'/'}
              onClick={() => handleLinkClick('/')}
              className={`${activeLink === '/' ? 'text-red-600' : 'hover:text-green-300'}`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to={'/products'}
              onClick={() => handleLinkClick('/products')}
              className={`${activeLink === '/products' ? 'text-red-600' : 'hover:text-green-300'}`}
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to={'/blogs'}
              onClick={() => handleLinkClick('/blogs')}
              className={`${activeLink === '/blogs' ? 'text-red-600' : 'hover:text-green-300'}`}
            >
              Blogs
            </Link>
          </li>

          <li>
            <Link
              to={'/contact'}
              onClick={() => handleLinkClick('/contact')}
              className={`${activeLink === '/contact' ? 'text-red-600' : 'hover:text-green-300'}`}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to={'/about'}
              onClick={() => handleLinkClick('/about')}
              className={`${activeLink === '/about' ? 'text-red-600' : 'hover:text-green-300'}`}
            >
              About
            </Link>
          </li>
           <Link to={'/base'}>
          <button className="hidden md:block bg-white text-black px-5 py-2 rounded cursor-pointer hover:bg-slate-400"> Login </button>
        </Link>

        </ul>

         <Link to={'/base'}>
          <button className="hidden md:block bg-white text-black px-5 py-2 rounded cursor-pointer hover:bg-slate-400"> Login </button>
        </Link>

       


        {/* Mobile Menu Collapsed */}
        <div className={`md:hidden w-full absolute bg-green-950 top-full left-0 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col items-center py-4 space-y-2">
            <li className="hover:text-green-500">Home</li>
            <li className="hover:text-green-500">Practices</li>
            <li className="hover:text-green-500">Blogs</li>
            <li className="hover:text-green-500">Contact</li>
            <li className="hover:text-green-500">About</li>
            <li className="hover:text-green-500">
              <button className="bg-white text-black px-5 py-2 rounded cursor-pointer hover:bg-slate-400"> Login </button></li>
          </ul>
        </div>
      </div>
    </nav>
     
        </div>
  )
}

export default Navbar
