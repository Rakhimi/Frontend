'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import { useSize } from '@/components/SizeContext'

enum Size {
  small = '375',
  large = '1024',
}


const Business = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { size } = useSize();

  const smallLayout = (


    <div className='w-[1024px] flex justify-center'>
    <div className='my-5 w-[375px] border-2'>
    <div
    className='p-5 bg-custom-rgba' 
    >
      <nav className='rounded-md px-2 bg-white bg-opacity-90'>
      
      <div className='flex items-center'>
      <div className='cursor-pointer'>
      <Image
        src="/logo-blinkstore.svg"
        alt="logo"
        width={400}
        height={300}
      />
      </div>
      <div>
        {/* Hamburger Icon, changing to X icon when open */}
        {(
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
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} flex flex-col`}>
        <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
        Product Catalog
        </a>
        <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
        Explore
        </a>
        <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
        Pricing
        </a>
        <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
        Blog
        </a>
        <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
        Playstore
        </a>
      </div>
      </nav>

      <div className='w-full my-5 flex flex-col gap-6'>
        
        <h1 className='text-white text-3xl font-semibold'>Start Your Print on Demand Dropshipping</h1>
        
        <h2 className='text-white text-lg border-dashed border-2 rounded-md p-1'>Effortless, Profitable, Fast. That is your business on Blinkstore.</h2>
        <h3 className='text-white border-dashed border-2 rounded-md p-1'>Most seamless, fastest, and best print on demand dropshipping business builder is here. Launch your business today!</h3>

        <div className='w-full flex gap-2'>
        <Button
        className='font-semibold w-full py-6 text-lg'
        >
            Get Started
        </Button>

        <Button
        className='font-semibold w-full py-6 text-lg'
        >
            How it works
        </Button>
        </div>

        <figure>
        <video autoPlay loop muted width="100%">
        <source src="/Updated-Animation-Blinkstore.webm" type="video/webm" />
        Your browser does not support the video tag.
        </video>
        </figure>
      </div>

        
    </div>
    

    <div className='w-full my-5 p-5 flex flex-col gap-4'>
      <h1 className='text-3xl font-semibold'>Simple Steps. Easy to Setup Online Print on Demand Store</h1>

      <div className='text-center mt-5'>
        <h2 className='text-4xl font-semibold text-custom-rgba'>1</h2>
        <h3 className='text-xl'>Launch your online store at super fast speed</h3>
        <Image
          src="/business1.png"
          alt="logo"
          width={400}
          height={300}
        />
      </div>

      <div className='text-center mt-5'>
        <h2 className='text-4xl font-semibold text-custom-rgba'>2</h2>
        <h3 className='text-xl'>Unleash your creativity, customise 50+ products</h3>
        <Image
          src="/business2.png"
          alt="logo"
          width={400}
          height={300}
        />
      </div>

      <div className='text-center mt-5'>
        <h2 className='text-4xl font-semibold text-custom-rgba'>3</h2>
        <h3 className='text-xl'>Share your website anywhere you like!</h3>
        <Image
          src="/business3.png"
          alt="logo"
          width={400}
          height={300}
        />
      </div>

      <div className='text-center mt-5'>
        <h2 className='text-4xl font-semibold text-custom-rgba'>4</h2>
        <h3 className='text-xl'>Build your brand & sell online</h3>
        <Image
          src="/business4.png"
          alt="logo"
          width={400}
          height={300}
        />
      </div>

    </div>

    <div className='w-full my-5 p-5 flex flex-col gap-4 bg-custom-rgba'>
      <h1 className='text-white text-3xl font-semibold'>Fully Customisable Website, 100% Owned By You</h1>
      <h2 className='text-white text-lg border-dashed border-2 rounded-md p-1'>Easily customise your website design, theme, and domain to create a brand that is as unique as you are.</h2>
      <Image
        src="/store-custom.png"
        alt="logo"
        width={400}
        height={300}
      />

    </div>
    </div>
    </div>
  )

  const largeLayout = (


    <div className='ml-20 my-10 w-[1024px] border-2'>
    <div
    className='p-5 bg-custom-rgba' 
    >
      <nav className='rounded-md px-2 bg-white bg-opacity-90 flex items-center'>
      
      
      <div className='cursor-pointer w-1/2'>
      <Image
        src="/logo-blinkstore.svg"
        alt="logo"
        width={400}
        height={300}
      />
      </div>
      <div className='flex'>
        <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
        Product Catalog
        </a>
        <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
        Explore
        </a>
        <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
        Pricing
        </a>
        <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
        Blog
        </a>
        <a className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 cursor-pointer">
        Playstore
        </a>
      </div>
      </nav>

      <div className='w-full my-10 flex gap-4 items-center'>
        
        <div className='flex flex-col gap-10'>
        <h1 className='text-white text-4xl font-semibold'>Start Your Print on Demand Dropshipping</h1>
        
        <h2 className='text-white text-xl border-dashed border-2 rounded-md p-1'>Effortless, Profitable, Fast. That is your business on Blinkstore.</h2>
        <h3 className='text-white text-lg border-dashed border-2 rounded-md p-1'>Most seamless, fastest, and best print on demand dropshipping business builder is here. Launch your business today!</h3>

        <div className='w-full flex gap-2'>
        <Button
        className='font-semibold py-6 text-lg'
        >
            Get Started
        </Button>

        <Button
        className='font-semibold py-6 text-lg'
        >
            How it works
        </Button>
        </div>
        </div>

        <div>
        <figure>
        <video autoPlay loop muted width="100%">
        <source src="/Updated-Animation-Blinkstore.webm" type="video/webm" />
        Your browser does not support the video tag.
        </video>
        </figure>
        </div>
      </div>

        
    </div>
    

    <div className='w-full my-5 p-5 flex flex-col gap-4'>
      <h1 className='text-4xl font-semibold'>Simple Steps. Easy to Setup Online Print on Demand Store</h1>

      <div className='mt-5 flex items-center'>
        <div>
        <h2 className='text-4xl font-semibold text-custom-rgba'>1</h2>
        <h3 className='text-3xl'>Launch your online store at super fast speed</h3>
        </div>
        <Image
          src="/business1.png"
          alt="logo"
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      <div className='mt-5 flex items-center'>
        <Image
          src="/business2.png"
          alt="logo"
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
        <div>
        <h2 className='text-4xl font-semibold text-custom-rgba'>2</h2>
        <h3 className='text-3xl'>Unleash your creativity, customise 50+ products</h3>
        </div>
      </div>

      <div className='mt-5 flex items-center'>
        <div>
        <h2 className='text-4xl font-semibold text-custom-rgba'>3</h2>
        <h3 className='text-3xl'>Share your website anywhere you like!</h3>
        </div>
        <Image
          src="/business3.png"
          alt="logo"
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      <div className='mt-5 flex items-center'>
        <Image
          src="/business4.png"
          alt="logo"
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
        <div>
        <h2 className='text-4xl font-semibold text-custom-rgba'>4</h2>
        <h3 className='text-3xl'>Build your brand & sell online</h3>
        </div>
      </div>

    </div>

    <div className='w-full my-5 px-5 py-10 flex flex-col gap-6 bg-custom-rgba'>
      <h1 className='text-white text-4xl font-semibold'>Fully Customisable Website, 100% Owned By You</h1>
      <h2 className='text-white text-xl border-dashed border-2 rounded-md p-1'>Easily customise your website design, theme, and domain to create a brand that is as unique as you are.</h2>
      <Image
        src="/store-custom.png"
        alt="logo"
        width={1024}
        height={1000}
        className="object-cover w-full h-full"
      />

    </div>
    </div>
  )



  return (
    <div>
        {size === Size.small ? smallLayout : largeLayout}
    </div>
  )
}

export default Business