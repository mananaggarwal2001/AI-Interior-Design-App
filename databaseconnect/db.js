import mongoose from "mongoose";
export const connectdb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_DATABASE}`)
        console.log("Connection is made successfully.")
    } catch (error) {
        console.log(error.message)
    }
}