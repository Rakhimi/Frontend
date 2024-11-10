'use client'

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useSize } from '@/components/SizeContext'

enum Size {
  small = '375',
  large = '1024',
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { size } = useSize();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="flex items-center justify-between">
        {/* Hamburger Icon, changing to X icon when open */}
        {size === Size.small && (
          <button
            onClick={toggleMenu}
            className="block p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // X icon
              <svg
                className="w-8 h-8 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-8 h-8 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Mobile Navigation Links - Visible only on small screens */}
      {size === Size.small && (
        <div className={`${isOpen ? 'block' : 'hidden'} flex flex-col`}>
          <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
            All Recipes
          </a>
          <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
            Breakfast
          </a>
          <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
            Salad
          </a>
          <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
            Soup
          </a>
          <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
            Dinner
          </a>
          <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
            Dessert
          </a>
          <div className='flex gap-1 m-2'>
            <Input className='border-gray-600' />
            <Button>Search</Button>
          </div>
        </div>
      )}

      {/* Desktop Navigation Links - Visible only on medium and larger screens */}
      {size === Size.large && (
        <div className="flex flex-row justify-between gap-4 mt-4">
          <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
            All Recipes
          </a>
          <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
            Breakfast
          </a>
          <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
            Salad
          </a>
          <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
            Soup
          </a>
          <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
            Dinner
          </a>
          <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
            Dessert
          </a>
          <div className='flex gap-1'>
            <Input className='border-gray-600 w-44' />
            <Button>Search</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
