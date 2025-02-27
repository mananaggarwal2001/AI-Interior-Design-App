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
            <div className='grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
                <CardComponent creditsnumber={5} />
                <CardComponent creditsnumber={10} />
                <CardComponent creditsnumber={15} />
                <CardComponent creditsnumber={20} />
            </div>
        </div>
    )
}

export default Page
