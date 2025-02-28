"use client"
import Image from 'next/image'
import React, { useState } from 'react'
function DesignType({selectedDesginType}) {
  const roomtypes = [
    { name: 'Guest Room', image: '/guestroom.jpg' },
    { name: 'Living Room', image: '/livingroom.png' },
    { name: 'Industrial', image: '/industrial.jpg' },
    { name: 'Bathroom', image: '/bathroom.jpg' },
    { name: 'Kitchen', image: '/kitchen.jpg' }
  ]
  const [selectedImageOption, setselectedImageOption] = useState('')
  return (
    <div className='mt-5'>
      <label htmlFor="" className='text-gray-600 font-semibold'>Select Interial Design Type</label>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-3'>
        {roomtypes.map((element, index) => {
          return (
            <div key={index} className={`shadow-md rounded-md mx-auto md:mx-0 w-fit h-fit`} onClick={() => {
              setselectedImageOption(element.name)
              selectedDesginType(element.name)
            }}>
              <Image src={element.image} alt='Room Design Image' width={200} height={100} className={` h-[80px] rounded-md hover:scale-105 transition-all duration-100 cursor-pointer ${element.name === selectedImageOption && 'border-2 border-black rounded-md p-1'}`}></Image>
              <h2 className='text-xs font-semibold text-center'>{element.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DesignType
