"use client"
import React from 'react'
import ImageSelection from './_components/ImageSelection.js'
import RoomType from './_components/RoomType.js'
import DesignType from './_components/DesignType.js'
const CreateNew = () => {
    const onHandleInputChange = (event, name) => {

    }
    return (
        <div>
            <h2 className='font-bold text-3xl text-primary text-center'>Experience The Magic Of AI Remodelling</h2>
            <p className='text-center text-gray-500 font-semibold'>Transform any room with the click. Use this magical power of AI for transforming your lifestyle.</p>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
                {/* Image Upload Section */}
                <ImageSelection selectedImage={(value) => onHandleInputChange(value, "image")} />
                {/* Form input Section */}
                <div>
                    {/* Room type for making the room */}
                    <RoomType selectedRoomType={(value)=> onHandleInputChange(value, 'roomType')}/>
                    {/* Room Design for making the room right */}
                    <DesignType/>
                    {/* Additional information. */}
                    {/* Button to generate image through the AI model. */}
                </div>
            </div>
        </div>
    )
}

export default CreateNew
