import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import watchRoutes from "./routes/watches.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import authRoutes from "./routes/auth.routes.js"; // Import authentication routes
import wishlistRoutes from "./routes/wishlist.routes.js"; // Import wishlist routes

dotenv.config(); // Load environment variables

const app = express();

// Middleware for CORS
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"], // Allow live and local frontend
    credentials: true, // Allow cookies and credentials
  })
);

// Middleware for parsing JSON and URL-encoded data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../frontend/watchly/dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/watchly/dist/index.html"));
});

// ✅ API Routes
app.use("/api/watches", watchRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/auth", authRoutes); // Register auth routes
app.use("/api/wishlist", wishlistRoutes); // Register wishlist routes

export { app };
