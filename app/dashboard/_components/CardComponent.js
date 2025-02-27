'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import Script from "next/script"
import React from 'react'

function CardComponent({ creditsnumber }) {
    const { user } = useUser()
    const handleCreditstransaction = async (amount) => {
        const response = await axios.post('/api/order-fetch', { credits: amount, useremail: user?.primaryEmailAddress?.emailAddress })
        let orderId = response.data.result;
        var options = {
            "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount,
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_HOST}/api/razorpay`,
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open()
    }
    return (
        <div>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <Card className='text-center'>
                <CardHeader>
                    <CardTitle className='text-3xl text-center font-bold'>{creditsnumber}</CardTitle>
                    <CardDescription>Credits</CardDescription>
                    <Button onClick={() => handleCreditstransaction(creditsnumber * 3)} className='w-full font-semibold'>Select</Button>
                    <p className="font-semibold text-lg">₹{creditsnumber * 3}</p>
                </CardHeader>
            </Card>
        </div>
    )
}

export default CardComponent
