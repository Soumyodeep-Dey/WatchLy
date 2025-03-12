import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    watchId: { type: Schema.Types.ObjectId, ref: "Watch", required: true },
    quantity: { type: Number, required: true, min: 1 },
    total: { type: String, required: true }, // Keeping it String due to "$"
    orderDate: { type: Date, default: Date.now },
    status: { type: String, enum: ["Processing", "Shipped", "Delivered", "Cancelled"], default: "Processing" },
  },
  { collection: "orders" },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
