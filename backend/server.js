// IMPORTS
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";

// CONFIG .env
dotenv.config();

// GETTING PORT FROM ENV
const PORT = process.env.PORT || 8000;

// DB CONNECTION
connectDB();

// APP INIT
const app = express();

// BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE : /api/users
app.use("/api/users", userRoutes);

// MIDDLEWARE [ERROR]
app.use(notFound);
app.use(errorHandler);

// LISTEN
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
