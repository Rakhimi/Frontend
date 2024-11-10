'use client'

import React from 'react'
import Navbar from './BlogNavbar'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"

import { useSize } from '@/components/SizeContext'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


enum Size {
  small = '375',
  large = '1024',
}


const Blog = () => {

  const { size } = useSize();


  const smallLayout = (
  
  <div className='w-[1024px] flex justify-center'>
    <div className='mx-5 my-5 p-5 w-[375px] border-2'>
      <h1 className='text-center font-semibold text-5xl'>Cooking Blog</h1>
      <hr className="border-2 border-black mt-2" />
      <Navbar/>
      <hr className="border-2 border-black" />
      <div>
      <div className='flex justify-center mt-5'>
      <div className='m-3 w-[275px] cursor-pointer'>
      <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className='w-full'>
            <Image
              src="/egg.jpg"
              alt="recipe"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className='w-full'>
            <Image
              src="/steak.jpg"
              alt="recipe"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className='w-full'>
            <Image
              src="/wings.jpg"
              alt="recipe"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
      </div>
      </div>
      <div>
      <h2 className='my-5 italic font-semibold text-3xl'>The Latest</h2>
      <div className='flex flex-col justify-center gap-4'>
      <div className='border rounded-md cursor-pointer'>
        <Image
          src="/cookies.jpg"
          alt="recipe"
          width={500}
          height={400}
          className="object-cover w-full h-full"
        />
        {/* Overlayed Text */}
        <p className="p-2 bg-white text-black text-sm font-semibold hover:bg-gray-100">
          With a golden-brown exterior and chewy center, each bite of a chocolate chip cookie
          offers a delightful balance of buttery flavor and melted chocolate.
        </p>
      </div>
      <div className='border rounded-md cursor-pointer'>
        <Image
          src="/garlic.jpg"
          alt="recipe"
          width={500}
          height={400}
          className="object-cover w-full h-full"
        />
        {/* Overlayed Text */}
        <p className="p-2 bg-white text-black text-sm font-semibold hover:bg-gray-100">
        French garlic soup is a warm, comforting broth made with roasted garlic, herbs, and often enriched with egg yolks or cream for a velvety texture.
        </p>
      </div>
      </div>
      </div>
      <div>
      <h2 className='my-5 italic font-semibold text-4xl w-[375px]'>Dinner</h2>
      <div className='flex flex-col justify-center gap-4'>
      <div className='cursor-pointer'>
        <Card>
          <CardContent className='p-0 h-48'>
            <Image
              src="/shawarma.jpg"
              alt='recipe'
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </CardContent>
          <CardHeader>
            <CardTitle>Lebanese Shawarma</CardTitle>
            <CardDescription>Flavorful, marinated meat dish, slow-roasted on a vertical spit, then sliced and wrapped in pita with garlic sauce, pickles, and fresh vegetables.</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className='cursor-pointer'>
        <Card>
          <CardContent className='p-0 h-48'>
            <Image
              src="/pasta.jpg"
              alt='recipe'
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </CardContent>
          <CardHeader>
            <CardTitle>Red and White Pasta</CardTitle>
            <CardDescription>Red and white pasta combines a rich tomato sauce with a creamy Alfredo, creating a perfect balance of tangy and smooth flavors in one dish.</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className='cursor-pointer'>
        <Card>
          <CardContent className='p-0 h-48'>
            <Image
              src="/salad.jpg"
              alt='recipe'
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </CardContent>
          <CardHeader>
            <CardTitle>Salad</CardTitle>
            <CardDescription>A fresh salad is a vibrant mix of crisp vegetables, flavorful greens, and zesty dressing, perfect for a light and healthy meal.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
    </div>
    </div>
  </div>
  )

  const largeLayout = (

    <div className='ml-20 my-10 p-10 w-[1024px] border-2'>
      <h1 className='text-center font-semibold text-6xl'>Cooking Blog</h1>
      <hr className="border-2 border-black mt-4" />
      <Navbar/>
      <hr className="border-2 border-black mt-4" />
      <div>
      <div>
      <div className='m-10 w-1/2 cursor-pointer'>
      <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className='w-full'>
            <Image
              src="/egg.jpg"
              alt="recipe"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className='w-full'>
            <Image
              src="/steak.jpg"
              alt="recipe"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className='w-full'>
            <Image
              src="/wings.jpg"
              alt="recipe"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
      </div>
      </div>
      <div>
      <h2 className='m-10 italic font-semibold text-4xl'>The Latest</h2>
      <div className='flex gap-2'>
      <div className="relative w-1/2 cursor-pointer">
        <Image
          src="/cookies.jpg"
          alt="recipe"
          width={500}
          height={400}
          className="object-cover w-full h-full"
        />
        {/* Overlayed Text */}
        <p className="absolute bottom-10 right-0 left-60 right-4 p-4 bg-white text-black text-sm font-semibold">
          With a golden-brown exterior and chewy center, each bite of a chocolate chip cookie
          offers a delightful balance of buttery flavor and melted chocolate.
        </p>
      </div>
      <div className="relative w-1/2 cursor-pointer">
        <Image
          src="/garlic.jpg"
          alt="recipe"
          width={500}
          height={400}
          className="object-cover w-full h-full"
        />
        {/* Overlayed Text */}
        <p className="absolute bottom-10 right-0 left-60 right-4 p-4 bg-white text-black text-sm font-semibold">
        French garlic soup is a warm, comforting broth made with roasted garlic, herbs, and often enriched with egg yolks or cream for a velvety texture.
        </p>
      </div>
      </div>
      </div>
      <div>
      <h2 className='m-10 italic font-semibold text-4xl'>Dinner</h2>
      <div className='flex justify-center gap-4'>
      <div className='w-72 cursor-pointer'>
        <Card>
          <CardContent className='p-0 h-48'>
            <Image
              src="/shawarma.jpg"
              alt='recipe'
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </CardContent>
          <CardHeader>
            <CardTitle>Lebanese Shawarma</CardTitle>
            <CardDescription>Flavorful, marinated meat dish, slow-roasted on a vertical spit, then sliced and wrapped in pita with garlic sauce, pickles, and fresh vegetables.</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className='w-72 cursor-pointer'>
        <Card>
          <CardContent className='p-0 h-48'>
            <Image
              src="/pasta.jpg"
              alt='recipe'
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </CardContent>
          <CardHeader>
            <CardTitle>Red and White Pasta</CardTitle>
            <CardDescription>Red and white pasta combines a rich tomato sauce with a creamy Alfredo, creating a perfect balance of tangy and smooth flavors in one dish.</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className='w-72 cursor-pointer'>
        <Card>
          <CardContent className='p-0 h-48'>
            <Image
              src="/salad.jpg"
              alt='recipe'
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </CardContent>
          <CardHeader>
            <CardTitle>Salad</CardTitle>
            <CardDescription>A fresh salad is a vibrant mix of crisp vegetables, flavorful greens, and zesty dressing, perfect for a light and healthy meal.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
    </div>
    </div>

  )

  return (
    <div>
      {size === Size.small ? smallLayout : largeLayout}
    </div>
  )
}

export default Blog