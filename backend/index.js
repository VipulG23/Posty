import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import emailRoute from "./routes/email.routes.js"
dotenv.config();

connectDB();
const PORT = 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// 🔍 Log all incoming requests
app.use((req, res, next) => {
  console.log("============== 📡 New Request ==============");
  console.log("➡️ Method:", req.method);
  console.log("📍 URL:", req.originalUrl);
  console.log("📥 Body:", req.body);
  console.log("🍪 Cookies:", req.cookies);
  console.log("============================================");
  next();
});

app.use("/api/v1", userRoute);
app.use("/api/v1/email", emailRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
