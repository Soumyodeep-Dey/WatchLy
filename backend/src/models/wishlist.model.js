import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Watch", // Reference to the Watch model
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1, // Default quantity is 1
  },
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;