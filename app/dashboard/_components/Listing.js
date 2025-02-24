"use client"
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import { Button } from '../../../components/ui/button'
import EmptyState from '../_components/EmptyState.js'
import Link from 'next/link'
function Listing() {
    const { user } = useUser()
    const [userRoomList, setUserRoomList] = useState([])
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h2 className='text-3xl font-extrabold'>Hello, {user?.fullName}</h2>
                <Link href={'/dashboard/create-new'}>
                    <Button className='rounded-md font-semibold text-sm py-2 px-3'>+ Redesign Room</Button>
                </Link>
            </div>
            {userRoomList?.length === 0 ?

                <EmptyState />
                :
                <div>

                </div>
            }
        </div>
    )
}

export default Listing
