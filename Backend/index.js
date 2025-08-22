import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import bookRouter from "./route/book.router.js";
import userRouter from "./route/user.router.js";

dotenv.config();

const app = express();

// --- Middlewares ---
app.use(cors());
app.use(express.json());

// --- Config ---
const PORT = process.env.PORT || 4001;
const MONGO_URI = process.env.MongoDBURL;

// --- Connect to MongoDB ---
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
connectDB();

// --- API Routes ---
app.use("/book", bookRouter);
app.use("/user", userRouter);

// --- Serve React build (Frontend/dist) ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// IMPORTANT: match the folder name exactly (you used `Frontend` with capital F)
const clientDistPath = path.join(__dirname, "../Frontend/dist");

app.use(express.static(clientDistPath));
app.get("*", (_req, res) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
});

// --- Start server ---
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
