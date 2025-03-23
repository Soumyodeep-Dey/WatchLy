import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to user
  productId: { type: Schema.Types.ObjectId, ref: "Watch", required: true }, // Reference to product
  quantity: { type: Number, default: 1 }, // Default quantity
});

const Cart = model("Cart", cartSchema);
export default Cart;
