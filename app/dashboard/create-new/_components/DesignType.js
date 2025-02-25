"use client"
import Image from 'next/image'
import React, { useState } from 'react'
function DesignType() {
  const roomtypes = [
    { name: 'Guest Room', image: '/guestroom.jpg' },
    { name: 'Living Room', image: '/livingroom.png' },
    { name: 'Bohenam', image: '/bohenam.jpg' },
    { name: 'Bohenam', image: '/bohenam.jpg' },
    { name: 'Bohenam', image: '/bohenam.jpg' },
    { name: 'Bohenam', image: '/bohenam.jpg' },
  ]
  const [selectedImageOption, setselectedImageOption] = useState('')
  return (
    <div className='mt-5'>
      <label htmlFor="" className='text-gray-600 font-semibold'>Select Interial Design Type</label>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-3'>
        {roomtypes.map((element, index) => {
          return (
            <div key={index} className={`shadow-md rounded-md w-full`} onClick={() => setselectedImageOption(element.name)}>
              <Image src={element.image} alt='Room Design Image' width={200} height={100} className={`h-[80px] rounded-md hover:scale-105 transition-all duration-100 cursor-pointer ${element.name===selectedImageOption && 'border-2 border-black rounded-md p-1'}`}></Image>
              <h2 className='text-xs font-semibold text-center'>{element.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DesignType
