import React from 'react';
import { CiUser, CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">Knitup</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {['About Knitup', 'Essentials And Atelier', 'Knitup 101', 'The Loop', 'Sustainability'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-800 hover:text-gray-600 text-lg font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Icon Buttons */}
            <div className="flex items-center space-x-2">
              <button 
                aria-label="User account"
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <CiUser className='w-6 h-6 md:w-7 md:h-7' />
              </button>
              <button 
                aria-label="Shopping cart"
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <CiShoppingCart className='w-6 h-6 md:w-7 md:h-7' />
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              aria-label="Mobile menu"
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
            
            {/* CTA Buttons - Hidden on small screens */}
            <div className="hidden sm:flex items-center space-x-3">
              <button className="bg-gray-100 hover:bg-gray-200 border border-black px-4 py-2 md:px-6 md:py-2 font-medium rounded-full transition-colors duration-200 text-sm md:text-base">
                Contact Us
              </button>
              <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 md:px-6 md:py-2 font-medium rounded-full transition-colors duration-200 text-sm md:text-base">
                Knitup Studio
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;