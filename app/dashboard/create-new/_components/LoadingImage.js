'use client'
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'

const LoadingImage = ({ loading }) => {
    return (
        <AlertDialog open={loading}>
            <AlertDialogContent className='flex flex-col items-center justify-center gap-0'>
                <Image src={'/loading.gif'} alt='loading is done' width={150} height={10}></Image>
                <h2 className='text-center font-semibold text-lg'>Redesigning Your Room... Do not refresh</h2>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default LoadingImage
