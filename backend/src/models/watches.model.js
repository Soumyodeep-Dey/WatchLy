import mongoose, { Schema } from "mongoose";

const watchSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true }, // Keeping it as String since prices have "$"
        imageUrl: { type: String, required: true },
        path: { type: String, required: true, unique: true },
        brand: { type: String, required: true }, // Rolex, Omega,etc.
        category: { type: String, required: true }, // Luxury, Sport, etc.
        createdAt: { type: Date, default: Date.now },
    },
    { collection: "watches" }, 
    { timestamps: true }
);

const Watch = mongoose.model("Watch", watchSchema);

export default Watch;
