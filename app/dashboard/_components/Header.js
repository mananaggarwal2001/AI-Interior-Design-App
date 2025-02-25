"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext } from 'react'
import { UserDetailsContext } from '../../_context/UserDetailsContext'
import {Button} from '../../../components/ui/button.jsx'
function Header() {
    const {userdetails, setUserDetails}= useContext(UserDetailsContext)
    return (
        <div className='px-5 py-3 shadow-sm flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.svg'} alt='AI Interior Design' width={40} height={40} />
                <h2 className='font-bold text-lg'>AI Interior Design</h2>
            </div>
            <Button className='border-2 border-primary rounded-full text-primary font-bold' variant='ghost'>Buy More Credits</Button>
            <div className='right flex items-center gap-5 justify-center'>
                <div className='flex gap-2 bg-slate-200 px-3 py-1 rounded-full items-center'>
                    <Image src={'/star.png'} width={15} height={15} alt='star icon'></Image>
                    <h2 className='text-md font-semibold'>{userdetails.credits}</h2>
                </div>
                <UserButton appearance={{userButtonAvatarBox: "w-20 h-20"}} />
            </div>

        </div>
    )
}

export default Header
