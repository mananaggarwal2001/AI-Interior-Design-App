import { storage } from '../../../config/firebaseConfig.js'
import axios from "axios"
import { ref, uploadString, getDownloadURL } from "firebase/storage"
import { connectdb } from '../../../databaseconnect/db.js'
import { NextResponse } from "next/server"
import Image from '@/app/models/Image.js'
import Replicate from "replicate"
const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN })
export async function POST(request) {
    const { imageUrl, roomType, designType, additionalInformation, emailAddress } = await request.json()
    console.log("The email address of this person is :- ", emailAddress)
    try {
        await connectdb()
        const input = {
            image: imageUrl,
            prompt: `A ${roomType} with a ${designType} style interior ${additionalInformation}`
        };
        // const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", { input });
        // console.log(output)
        const output= 'https://replicate.delivery/xezq/AQ4PyyTFKbKGI1lPTX2BBPt6sHfXeGvLj4fEQFbcKJzyRxmoA/out.png'
        const base64Image = await convertImageToBase64(output) // this will give the converted base 64 image URL for doing the work.
        const fileName = Date.now() + '.png'
        const storageRef = ref(storage, 'room-redesign/' + fileName)
        await uploadString(storageRef, base64Image, 'data_url')
        const downloadUrl = await getDownloadURL(storageRef)
        // last step is remaining to save everything to database which is done by the user for generating image.
        console.log(downloadUrl)
        const image = await Image.create({ roomType: roomType, designType: designType, originalImage: imageUrl, aiImage: downloadUrl, userEmail: emailAddress })
        const finalresult = await image.save()
        // console.log("finalresult is:- ", finalresult)
        return NextResponse.json({ result: finalresult.aiImage })
    } catch (error) {
        return NextResponse.error({ error })
    }
}

async function convertImageToBase64(ImageUrl) {
    const response = await axios.get(ImageUrl, { responseType: 'arraybuffer' })
    const base64ImageRaw = Buffer.from(response.data).toString('base64')
    return 'data:image/png;base64,' + base64ImageRaw
}