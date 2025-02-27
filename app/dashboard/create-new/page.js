"use client"
import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection.js'
import RoomType from './_components/RoomType.js'
import DesignType from './_components/DesignType.js'
import AdditionalRequirement from './_components/AdditionalRequirement.js'
import { Button } from '../../../components/ui/button.jsx'
import axios from 'axios'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../../config/firebaseConfig.js'
import { useUser } from '@clerk/nextjs'
import LoadingImage from './_components/LoadingImage.js'
import AiOutputDialog from './_components/AiOutputDialog.js'
const CreateNew = () => {
    const [formData, setFormData] = useState()
    const [loader, setLoader] = useState(false)
    const { user } = useUser()
    const [aiOutputDialog, setAiOutputdialog] = useState(false)
    const [originalImage, setOriginalImage]= useState('')
    const [AiImage, setAiImage]= useState('')
    const onHandleInputChange = (event, name) => {
        setFormData(prev => ({ ...prev, [name]: event }))
        console.log(formData)
    }
    const generateAIImage = async () => {
        try {

            setLoader(true)
            const rawImageURL = await saveRawImageToFireBase()
            const response = await axios.post("/api/redesign-room", {
                imageUrl: rawImageURL,
                roomType: formData?.roomType,
                designType: formData?.designType,
                additionalInformation: formData?.additionalInformation,
                emailAddress: user?.primaryEmailAddress?.emailAddress
            })
            console.log(response.data)
            setLoader(false)
            setOriginalImage(rawImageURL)
            setAiImage(response.data.result)
            setAiOutputdialog(true)
        } catch (error) {
            console.log(error)
            setLoader(false)
        }

    }
    const saveRawImageToFireBase = async () => {
        const fileName = Date.now() + "_raw.png"
        const imageRef = ref(storage, 'room-redesign/' + fileName)
        await uploadBytes(imageRef, formData.image).then((value) => {
            console.log("Image uploaded sucessfully")
        })
        // for downloading the url of the uploaded image
        const downloadURL = await getDownloadURL(imageRef)
        return downloadURL;
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
                    <RoomType selectedRoomType={(value) => onHandleInputChange(value, 'roomType')} />
                    {/* Room Design for making the room right */}
                    <DesignType selectedDesginType={(value) => onHandleInputChange(value, 'designType')} />
                    {/* Additional information. */}
                    <AdditionalRequirement addtionalInformation={(value) => onHandleInputChange(value, 'additionalInformation')} />
                    {/* Button to generate image through the AI model. */}
                    <Button onClick={generateAIImage} className='mt-4 mb-1 bg-primary w-full'>Generate</Button>
                    <p className='mb-40 text-xs font-semibold text-gray-400'>NOTE: 1 Credit Will Be Used To Redesign Your Room</p>
                    <LoadingImage loading={loader} />
                    <AiOutputDialog openDialog={aiOutputDialog} closeDialog={() => setAiOutputdialog(false)} originalImage= {originalImage} AiImage={AiImage} />
                </div>
            </div>
        </div>
    )
}

export default CreateNew
