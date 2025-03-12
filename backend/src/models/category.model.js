import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
  },
  { collection: "categories" }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
