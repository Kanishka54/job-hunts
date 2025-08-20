import express from "express";
import dbConnection from "./database/dbConnection.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import { config } from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();

// Load environment variables
config({ path: "./config/config.env" });

// CORS configuration - allow multiple origins for production
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://localhost:3000", // for local development
      "http://localhost:5173", // for Vite
    ],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Test route to check if server is working
app.get("/", (req, res) => {
  res.json({
    message: "Job Portal API is running successfully!",
    status: "success"
  });
});

// API routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

// Database connection
dbConnection();

// Error handling middleware (should be last)
app.use(errorMiddleware);

// NO app.listen() here - server.js handles it
export default app;