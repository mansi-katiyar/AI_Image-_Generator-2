import mongoose from "mongoose";
const imageSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  prompt: String,
  imageUrl: String,
  likes: { type: Number, default: 0 }
}, { timestamps: true });
export default mongoose.model("Image", imageSchema);
