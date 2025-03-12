import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Store hashed passwords
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "users" },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
