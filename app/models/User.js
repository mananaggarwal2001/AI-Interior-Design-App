import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    imageUrl: { type: String, required: true },
    credits: { type: Number, default: 3 }
})
console.log(mongoose.models)
export default mongoose.models.User || mongoose.model('User', userSchema)