'use client'

import React, { useEffect, useCallback } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import Accordion from './Accordion';
import Counter from './Counter';
import Customer from './Customer';
import ProductList from './ProductList';
import { GoDotFill } from "react-icons/go";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { useSize } from '@/components/SizeContext'

enum Size {
  small = '375',
  large = '1024',
}


type FormData = {
  mainCost: number | null;
  equipments: { name: string; cost: number | null; isDisabled: boolean }[];
  restaurantName: string;
  cuisineName: string;
  location: string;
  rent: number | null;
  workerPay: number | null;
  workerCounter: number;
  workerTotalPay: number;
  totalOperatingCost: number;
  population: number | null;
  percentage: number;
  totalCustomer: number;
  productsRevenue: { name: string; cost: number | null; price: number | null; customers: number | null; revenue: number | null; isAdded: boolean}[];
  totalProductsRevenue: number;
  totalRevenue: number;
};

const Form = () => {


  const { control, register, watch, setValue } = useForm<FormData>({
    defaultValues: {
      mainCost: null,
      equipments: [{ name: '', cost: null, isDisabled: false }],
      restaurantName: '',
      cuisineName: '',
      location: '',
      rent: null,
      workerPay: null,
      workerCounter: 1,
      workerTotalPay: 0,
      totalOperatingCost: 0,
      population: null,
      percentage: 3,
      totalCustomer: 0,
      productsRevenue: [{ name:'', cost: null, price: null, customers: null, revenue: null, isAdded: false}],
      totalProductsRevenue: 0,
      totalRevenue: 0,
    },
  });

  const { fields: equipmentFields, append: appendEquipment, remove: removeEquipment, update: updateEquipment } = useFieldArray({
      control,
      name: 'equipments',
  });

  const { fields: productsRevenueFields, append: appendProductRevenue, remove: removeProductRevenue, update: updateProductRevenue } = useFieldArray({
      control,
      name: 'productsRevenue',
  })

  const handleTotalCostChange = useCallback((newTotalCost:number) => {
    setValue('workerTotalPay', newTotalCost);
  }, [setValue]);
  
  const handleCostChange = useCallback((newCost: number | null) => {
  setValue('workerPay', newCost);
  }, [setValue]);

  const handleTotalCustomerChange = useCallback((newTotalCost:number) => {
      setValue('totalCustomer', newTotalCost);
    }, [setValue]);
    
  const handleCustomerChange = useCallback((newCost: number | null) => {
  setValue('population', newCost);
  }, [setValue]);

  const calculateTotalOperatingCost = useCallback(() => {
    const mainCost = Number(watch('mainCost')) || 0;
    const rent = Number(watch('rent')) || 0;
    const workerTotalPay = Number(watch('workerTotalPay')) || 0;;
    const total = mainCost + rent + workerTotalPay;
    setValue('totalOperatingCost', total);
    
  }, [watch, setValue]);

  useEffect(() => {
      calculateTotalOperatingCost();
  }, [watch('mainCost'), watch('rent'), watch('workerTotalPay')]);

  const { size } = useSize();



  const smallLayout = (

    <div className='w-[1024px] flex justify-center'>
      <div className='mt-5 mb-20 p-4 w-[375px] border-2 flex flex-col gap-4'>

      <h1 className='font-semibold text-2xl text-center'>Financial Model</h1>
      <div>
      <h2 className='font-semibold text-lg mb-4'>Equipment Cost</h2>
      <Accordion
        register={register}
        fields={equipmentFields}
        append={appendEquipment}
        remove={removeEquipment}
        update={updateEquipment}
        watch={watch}
        setValue={setValue}
        itemsKey='equipments'
        mainCostKey='mainCost'
      />
      <hr className="border-2 border-gray-400" />
      </div>


      <div>
      <h2 className='font-semibold text-lg my-4'>Workers</h2>
      <Controller
      control={control}
      name="workerCounter"
      render={({ field }) => (
          <Counter
          value={field.value}
          onChange={(value) => {
              field.onChange(value);
          }}
          totalCost={watch('workerTotalPay')}
          onTotalCostChange={handleTotalCostChange}
          cost={watch('workerPay')}
          onCostChange={handleCostChange}
          />
      )}
      />
      <hr className="border-2 border-gray-400" />
      </div>


      <div>
      <h2 className='font-semibold text-lg my-4'>Customer Projection</h2>
      <Controller
      control={control}
      name="percentage"
      render={({ field }) => (
          <Customer
          percentage={field.value}
          onPercentageChange={(value) => {
              field.onChange(value);
          }}
          totalCustomer={watch('totalCustomer')}
          totalCustomerChange={handleTotalCustomerChange}
          population={watch('population')}
          onPopulationChange={handleCustomerChange}
          />
      )}
      />
      <hr className="border-2 border-gray-400" />
      </div>


      <div>
      <div className='flex gap-2'>
      <h2 className='font-semibold text-lg my-4'>Products Revenue</h2>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger><GoDotFill className='text-3xl'/></TooltipTrigger>
          <TooltipContent>
            <p>1. Product Name</p>
            <p>2. Cost</p>
            <p>3. Price</p>
            <p>4. Estimated Customers</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      </div>

      <ProductList
      register={register}
      fields={productsRevenueFields}
      append={appendProductRevenue}
      remove={removeProductRevenue}
      update={updateProductRevenue}
      watch={watch}
      setValue={setValue}
      flex='flex-col'
      />
      </div>

      </div>
    </div>
  )

  const largeLayout = (

    <div className='ml-20 my-10 p-10 w-[1024px] border-2'>

      <h1 className='font-semibold text-4xl text-center mb-10'>Financial Model</h1>
      <div className='w-1/2'>
      <h2 className='font-semibold text-2xl my-4'>Equipment Cost</h2>
      <Accordion
        register={register}
        fields={equipmentFields}
        append={appendEquipment}
        remove={removeEquipment}
        update={updateEquipment}
        watch={watch}
        setValue={setValue}
        itemsKey='equipments'
        mainCostKey='mainCost'
      />
      </div>
      <hr className="border-2 border-gray-400" />


      <div className='w-1/2'>
      <h2 className='font-semibold text-2xl my-4'>Workers</h2>
      <Controller
      control={control}
      name="workerCounter"
      render={({ field }) => (
          <Counter
          value={field.value}
          onChange={(value) => {
              field.onChange(value);
          }}
          totalCost={watch('workerTotalPay')}
          onTotalCostChange={handleTotalCostChange}
          cost={watch('workerPay')}
          onCostChange={handleCostChange}
          />
      )}
      />
      
      </div>
      <hr className="border-2 border-gray-400" />


      <div className='w-1/2'>
      <h2 className='font-semibold text-2xl my-4'>Customer Projection</h2>
      <Controller
      control={control}
      name="percentage"
      render={({ field }) => (
          <Customer
          percentage={field.value}
          onPercentageChange={(value) => {
              field.onChange(value);
          }}
          totalCustomer={watch('totalCustomer')}
          totalCustomerChange={handleTotalCustomerChange}
          population={watch('population')}
          onPopulationChange={handleCustomerChange}
          />
      )}
      />
      </div>
      <hr className="border-2 border-gray-400" />


      <div>
      <h2 className='font-semibold text-2xl my-4'>Products Revenue</h2>
      <ProductList
      register={register}
      fields={productsRevenueFields}
      append={appendProductRevenue}
      remove={removeProductRevenue}
      update={updateProductRevenue}
      watch={watch}
      setValue={setValue}
      flex='flex-row'
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

export default Form