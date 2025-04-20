import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Watch", // Reference to the Watches model
    required: true,
  },
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;