import express from "express";
import cors from "cors";
import watchRoutes from "./routes/watches.routes.js"; // Import watch routes

const app = express(); 

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
);

// Common middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// ✅ API Routes
app.use("/api/watches", watchRoutes); // Register watch routes





export { app };
