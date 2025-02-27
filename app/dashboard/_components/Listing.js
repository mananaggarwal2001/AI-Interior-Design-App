"use client"
import { useUser } from '@clerk/nextjs'
import React, { useState, useEffect } from 'react'
import { Button } from '../../../components/ui/button'
import EmptyState from '../_components/EmptyState.js'
import Link from 'next/link'
import axios from 'axios'
import RoomDesignCard from './RoomDesignCard'
function Listing() {
    const { user } = useUser()
    const [userRoomList, setUserRoomList] = useState([])
    const userRoomListImages = async () => {
        const response = await axios.post('/api/fetch-list', { userEmail: user?.primaryEmailAddress?.emailAddress })
        const finalresult = response.data.result
        setUserRoomList([...finalresult])
    }

    useEffect(() => {
        if (user) {
            userRoomListImages()
        }
        console.log("The user room list:- " + userRoomList)
    }, [user])

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
                <div className='mt-10'>
                    <h2 className='text-xl text-primary font-semibold mb-5'>AI Room Studio</h2>
                    <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4'>
                        {userRoomList.map((element, index) => {
                            return (
                                <RoomDesignCard key={index} room={element} />
                            )
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default Listing
