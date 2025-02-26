import mongoose from "mongoose";
const imageSchema = mongoose.Schema({
    roomType: { type: String, required: true },
    designType: { type: String, required: true },
    originalImage: { type: String, required: true },
    aiImage: { type: String, required: true },
    userEmail: String
})

export default mongoose.models.Image || mongoose.model('Image', imageSchema)