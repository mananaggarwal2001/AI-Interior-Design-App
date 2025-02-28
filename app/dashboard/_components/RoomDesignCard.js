"use client"
import React, { useState } from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import AiOutputDialog from '../create-new/_components/AiOutputDialog';
function RoomDesignCard({ room }) {
    const [openDialog, setOpenDialog] = useState(false)
    console.log(openDialog)
    const onClickRoom = () => {
        setOpenDialog(true)
    }
    return (
        <div className='shadow-lg rounded-md cursor-pointer' onClick={onClickRoom}>
            <ReactBeforeSliderComponent
                firstImage={
                    { imageUrl: room.originalImage }
                }
                secondImage={
                    { imageUrl: room.aiImage }
                }
            />
            <div className='p-3'>
                <h2 className='font-semibold text-sm'>✌️Room Type: {room.roomType}</h2>
                <h2 className='font-semibold text-sm'>✌️Design Type: {room.designType}</h2>
            </div>
            <AiOutputDialog originalImage={room.originalImage} AiImage={room.aiImage} openDialog={openDialog} closeDialog={setOpenDialog} />
        </div>
    )
}

export default RoomDesignCard
