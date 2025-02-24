import { NextResponse } from "next/server"
import { connectdb } from '../../../databaseconnect/db.js'
import User from '../../models/User.js'
export async function POST(request) {
    const { user } = await request.json()
    // check if user is already present in the database or not.
    try {
        await connectdb()
        const findedresult = await User.findOne({ email: user.primaryEmailAddress.emailAddress })
        console.log(user)
        if (!findedresult) {
            const newUser = await User.create({ name: user.username, email: user.primaryEmailAddress.emailAddress, imageUrl: user.imageUrl })
            const result = await newUser.save()
            return NextResponse.json({ result: result })
        } else {
            return NextResponse.json({ result: findedresult })
        }
    } catch (error) {
        return NextResponse.json({ error: error.message })
    }
}