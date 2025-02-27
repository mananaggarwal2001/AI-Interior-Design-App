import React from 'react'
import Header from '../_components/Header'
import CardComponent from '../_components/CardComponent'
function Page() {
    return (
        <div>
            <div className='mb-10'>
                <h2 className='text-3xl font-semibold'>Buy More Credits</h2>
                <p className='font-semibold text-lg font-sans'>Unlock the potential of your space with AI-powered room redesigns for designing rooms!!!</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                <CardComponent creditsnumber={5} />
                <CardComponent creditsnumber={10} />
                <CardComponent creditsnumber={15} />
                <CardComponent creditsnumber={20} />
                <CardComponent creditsnumber={50} />
                <CardComponent creditsnumber={100} />
                <CardComponent creditsnumber={200} />
                <CardComponent creditsnumber={400} />
            </div>
        </div>
    )
}

export default Page
