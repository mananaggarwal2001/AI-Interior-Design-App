import Image from 'next/image'
import React from 'react'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'
function EmptyState() {
  return (
    <div className='flex items-center justify-center mt-10 flex-col'>
      <Image alt='Room Design Logo' width={300} height={300} src={'/roomdesign.png'}></Image>
      <h2 className='font-bold text-xl text-gray-500'>Create New AI Interior Design For Your Room</h2>
      <Link href={'/dashboard/create-new'}>
        <Button className='mt-5 font-bold'>+ Redesign Room</Button>
      </Link>
    </div>
  )
}

export default EmptyState
