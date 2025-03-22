import React,{useState} from 'react'
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-semibold">D</div>
          <span>Delna</span>
        </motion.div>
        
        {/* Menu */}
        <div className="hidden md:flex gap-6 text-lg">
          {/* <a href="#" className="hover:text-blue-500">Home</a> */}
          <NavLink to={"/"} className="hover:text-blue-500">Home</NavLink>
          <NavLink to={"/About"} className="hover:text-blue-500">About</NavLink>
          <NavLink to={"/Contact"} className="hover:text-blue-500">Contact</NavLink>
          <NavLink to={"/products/lights"} className="hover:text-blue-500">Product</NavLink>
          <NavLink to={"/Faq-Page"} className="hover:text-blue-500">FAQPage</NavLink>
          {/* <a href="#" className="hover:text-blue-500">Services</a>
          <a href="#" className="hover:text-blue-500">Contact</a> */}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center bg-white shadow-md py-4 gap-3"
        >
         <NavLink to={"/"} className="hover:text-blue-500">Home</NavLink>
          <NavLink to={"/About"} className="hover:text-blue-500">About</NavLink>
          <NavLink to={"/Contact"} className="hover:text-blue-500">Contact</NavLink>
          <NavLink to={"/products/lights"} className="hover:text-blue-500">Product</NavLink>
          <NavLink to={"/Faq-Page"} className="hover:text-blue-500">FAQPage</NavLink>
        </motion.div>
      )}
    </>
  )
}

export default Navbar