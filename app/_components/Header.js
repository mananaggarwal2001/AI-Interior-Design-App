"use client"
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
function Header() {
    const user = useUser()
    const router = useRouter()
    useEffect(() => {
        console.log(user.isSignedIn)
        if (user.isSignedIn) {
            router.push('/dashboard')
        }
    }, [user])
    return (
        <div className='px-5 py-3 shadow-sm flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.svg'} className='' alt='AI Interior Design' width={40} height={40} />
                <h2 className='font-bold text-lg'>AI Interior Design</h2>
            </div>
            <Link href={`/sign-in`}>
                <Button>Dashboard</Button>
            </Link>
        </div>
    )
}

export default Header
