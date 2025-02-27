import { NextResponse } from "next/server"
import connectdb from '../../../databaseconnect/db.js'
import Image from "@/app/models/Image"
export async function POST(request) {
    const { userEmail } = await request.json()
    try {
        const result = await Image.find({ userEmail: userEmail })
        return NextResponse.json({result})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error})
    }
}