import { timeStamp } from "console";
import mongoose from "mongoose";
const paymentSchema = mongoose.Schema({
    orderId: { type: String, required: true },
    amount: { type: Number, required: true },
    done: { type: Boolean, default: false },
    userEmail: { type: String, required: true }
},{
    timeStamp:true
})
export default mongoose.models.Payment || mongoose.model("Payment", paymentSchema)