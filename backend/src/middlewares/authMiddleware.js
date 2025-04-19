import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Secret key

// Middleware to verify JWT
export const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");
     

    if (!token) {
      return res.status(401).json({ error: "Access Denied. No token provided." });
    }

    const verified = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    req.user = verified; // Attach user data to request
    next();
  } catch (error) {
    console.error("Token verification error:", error); // Log the error
    res.status(403).json({ error: "Invalid or expired token" });
  }
};
