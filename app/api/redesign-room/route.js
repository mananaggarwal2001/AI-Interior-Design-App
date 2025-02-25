import { storage } from '../../../config/firebaseConfig.js'
import axios from "axios"
import { ref, uploadString, getDownloadURL } from "firebase/storage"
import { NextResponse } from "next/server"
import Replicate from "replicate"
const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN })
export async function POST(request) {

    const { imageUrl, roomType, designType, additionalInformation } = await request.json()
    console.log(request.json())
    try {
        const input = {
            image: imageUrl,
            prompt: `A ${roomType} with a ${designType} style interior ${additionalInformation}`
        };
        const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", { input });
        const base64Image = await convertImageToBase64(output) // this will give the converted base 64 image URL for doing the work.
        const fileName = Date.now() + '.png'
        const storageRef = ref(storage, 'room-redesign/' + fileName)
        await uploadString(storageRef, base64Image, 'data_url')
        const downloadUrl = await getDownloadURL(storageRef)
        console.log(downloadUrl)
        return NextResponse.json({ result: downloadUrl })
        // last step is remaining to save everything to database.

    } catch (error) {
        return NextResponse.error({ error })
    }
}

async function convertImageToBase64(ImageUrl) {
    const response = await axios.get(ImageUrl, { responseType: 'arraybuffer' })
    const base64ImageRaw = Buffer.from(response.data).toString('base64')
    return 'data:image/png;base64,' + base64ImageRaw
}