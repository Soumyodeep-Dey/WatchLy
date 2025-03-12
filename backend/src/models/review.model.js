import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    watchId: { type: Schema.Types.ObjectId, ref: "Watch", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "reviews" },
    { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
