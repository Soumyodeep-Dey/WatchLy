import express from "express";
import cors from "cors";
import watchRoutes from "./routes/watches.routes.js"; // Import watch routes
import cartRoutes from "./routes/cart.routes.js"; // Import cart routes

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:8000"], // Add allowed origins
    credentials: true,
  })
);

// Common middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// ✅ API Routes
app.use("/api/watches", watchRoutes); // Register watch routes
app.use("/api/cart", cartRoutes); // Register the cart routes

export { app };
