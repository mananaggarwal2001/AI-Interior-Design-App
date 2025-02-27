import Payment from "@/app/models/Payment";
import { connectdb } from "@/databaseconnect/db";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";
export async function POST(request) {
    let { credits, useremail } = await request.json()
    let instance = new Razorpay({
        key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    // then make the order options for this value.
    var options = {
        amount: credits * 100,
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    // then create the order value.
    let generatedOrder = await instance.orders.create(options)
    const result = await Payment.create({ orderId: generatedOrder.id, amount: credits, done: false, userEmail: useremail })
    const finalresult = await result.save()
    console.log(finalresult)
    return NextResponse.json({ result: generatedOrder.id })
}