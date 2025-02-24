"use client"
import React from 'react'
import ImageSelection from './_components/ImageSelection.js'
const CreateNew = () => {
    const onImageSelection = (event, filename) => {
        console.log(filename)
    }
    return (
        <div>
            <h2 className='font-bold text-3xl text-primary text-center'>Experience The Magic Of AI Remodelling</h2>
            <p className='text-center text-gray-500 font-semibold'>Transform any room with the click. Use this magical power of AI for tranforming your lifestyle.</p>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-10'>
                {/* Image Upload Section */}
                <ImageSelection selectedImage={(value) => onImageSelection(value, "image")} />
                {/* Form input Section */}
                <div>
                    {/* Room type for making the room */}
                    {/* Room Design for making the room right */}
                    {/* Additional information. */}
                    {/* Button to generate image through the AI model. */}
                </div>
            </div>
        </div>
    )
}

export default CreateNew
