import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Store hashed passwords
  },
  { 
    collection: "users", 
    timestamps: true // Enable createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", userSchema);

export default User;
