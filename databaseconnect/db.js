import mongoose from "mongoose";
export const connectdb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_DATABASE}`)
    } catch (error) {
        console.log(error.message)
    }
}