import Payment from "@/app/models/Payment"
import User from "@/app/models/User"
import { NextResponse } from "next/server"
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils"
import { connectdb } from "@/databaseconnect/db"
export async function POST(request) {
    try {
        await connectdb()
        const values = await request.formData() // this for fetching the data from this pos request.
        const finalValues = Object.fromEntries(values)
        const findedPayment = await Payment.findOne({ orderId: finalValues.razorpay_order_id })
        if (!findedPayment) {
            return NextResponse.json({ message: "orderId not found", error: true, success: false })
        }
        let result = validatePaymentVerification({ "order_id": finalValues.razorpay_order_id, "payment_id": finalValues.razorpay_payment_id }, finalValues.razorpay_signature, process.env.RAZORPAY_KEY_SECRET)
        if (result) {
            let updateValues = await Payment.findOneAndUpdate({ orderId: finalValues.razorpay_order_id }, { done: true }, { new: true })
            let findUser = await User.findOneAndUpdate({ email: updateValues.userEmail }, { $inc: { credits: (updateValues.amount / 3) } }, {new:true})
            console.log("The updated user credits is:- ", findUser)
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/dashboard`)
        }
        NextResponse.json({ message: "orderId is valid  please make these order again", error: true, success: false })
    } catch (error) {
        console.log(error)
    }

}