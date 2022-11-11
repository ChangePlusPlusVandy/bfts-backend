import mongoose from "mongoose";
const { Schema } = mongoose;

const messagesSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent recompilation of model if it already exists
export default mongoose.models.Messages || mongoose.model("Messages", messagesSchema);
