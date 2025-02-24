"use client"
import Image from 'next/image'
import React, { useState } from 'react'
const ImageSelection = ({selectedImage}) => {
    const [file, setFile] = useState()
    const onFileSelected = (event) => {
        setFile(event.target.files[0])
        selectedImage(event.target.files[0])
    }
    return (
        <div>
            <label>Select Image of Your Room</label>
            <div className='mt-3'>
                <label htmlFor="upload-image">
                    <div className={`p-16 border border-primary bg-slate-200 border-dotted rounded-xl flex justify-center cursor-pointer hover:shadow-lg ${file && 'p-0 bg-white object-cover'}`}>
                        {!file ? <Image height={150} width={150} alt='Image Upload In the Screen' src={'/imageupload.png'}></Image>
                            : <Image width={150} alt='room image' height={150} src={URL.createObjectURL(file)} className='w-[300px] h-[300px] object-cover'></Image>}
                    </div>
                </label>
                <input style={{ display: "none" }} type="file" name="" id="upload-image" accept='image/*' onChange={onFileSelected} />
            </div>
        </div>
    )
}

export default ImageSelection
