import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000; // Ensure the port is set to 8000

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`); // Log server start message
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });