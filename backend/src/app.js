import express from "express";
import cors from "cors";
import path from "path";
import watchRoutes from "./routes/watches.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import authRoutes from "./routes/auth.routes.js"; // Import authentication routes
import wishlistRoutes from "./routes/wishlist.routes.js"; // Import wishlist routes

const app = express();

// Middleware for CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:8000"], // Allowed origins
    credentials: true,
  })
);

// Middleware for parsing JSON and URL-encoded data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));


// ✅ API Routes
app.use("/api/watches", watchRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/auth", authRoutes); // Register auth routes
app.use("/api/wishlist", wishlistRoutes); // Register wishlist routes

export { app };
