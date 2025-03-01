import Image from 'next/image'
import React from 'react'
function Footer() {
    return (
        <div className='bg-black flex justify-between items-center text-white px-7 md:flex-row flex-col text-sm md:text-xl'>
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.svg'} className='invert' alt='AI Interior Design' width={40} height={40} />
                <h2 className='font-bold'>AI Interior Design</h2>
            </div>
            <div className=' text-white py-3 text-center font-semibold'>
                CopyRight &copy; {new Date().getFullYear()}  AI Interior Design By Manan Aggarwal
            </div>
        </div>
    )
}

export default Footer
