import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     <header className="w-full bg-white shadow-md">
     <div className="bg-gray-900 text-white text-sm py-2 px-1 sm:px-2 md:px-3 lg:px-4 flex justify-between items-center">
     <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <Mail size={16} /> <span>contact@delna.com</span>
        </div>
        <div className="flex items-center ">
          <Phone size={16} /> <span>+1 234 567 890</span>
        </div>
      </div>
      <div className="flex gap-3">
        <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
        <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
        <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a>
        <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
      </div>
    </div> 
    </header>
    </>
  )}


export default Header