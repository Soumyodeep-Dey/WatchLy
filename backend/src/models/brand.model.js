import mongoose, { Schema } from "mongoose";

const brandSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    logoUrl: { type: String, required: true },
  },
  { collection: "brands" },
    { timestamps: true }
);

const Brand = mongoose.model("Brand", brandSchema);

export default Brand;
