'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import { useSize } from './SizeContext';
import { FaDesktop } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Navbar = () => {
  const pathname = usePathname();
  const { size, changeToSmall, changeToLarge } = useSize();

  const isActive = (path: string) => pathname === path;

  const isActiveSize = (currentSize: string) => size === currentSize;

  return (
    <nav className="m-10">
      <div className="flex flex-col gap-4">
        <div className='flex gap-2 mb-8'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div 
                onClick={changeToSmall}
                className={`p-3 rounded-md cursor-pointer ${
                  isActiveSize('375') ? 'bg-gray-900 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                <MdOutlineSmartphone className='text-2xl'/>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>375px</p>
              <p>iPhone SE</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
            <div
              onClick={changeToLarge}
              className={`p-3 rounded-md cursor-pointer ${
                isActiveSize('1024') ? 'bg-gray-900 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <FaDesktop className='text-2xl'/>
            </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>1024px</p>
              <p>Smallest Desktop</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        
        </div>
        <hr className='border border-gray-600'></hr>
        <a
          href="/blog"
          className={`px-3 py-2 rounded-md text-sm font-semibold ${
            isActive('/blog') ? 'bg-gray-900 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Blog
        </a>
        <a
          href="/business"
          className={`px-3 py-2 rounded-md text-sm font-semibold ${
            isActive('/business') ? 'bg-gray-900 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Business
        </a>
        <a
          href="/form"
          className={`px-3 py-2 rounded-md text-sm font-semibold ${
            isActive('/form') ? 'bg-gray-900 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Form
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
