import mongoose from "mongoose";
export default connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_DATABASE}`)
    } catch (error) {
        console.log(error.message)
    }
}