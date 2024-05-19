// IMPORTS
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { notFound , errorHandler } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";

// CONFIG .env
dotenv.config();

// GETTING PORT FROM ENV
const PORT = process.env.PORT || 8000;

// APP INIT
const app = express();

// ROUTE : /api/users
app.use("/api/users", userRoutes);

// MIDDLEWARE [ERROR]
app.use(notFound);
app.use(errorHandler);

// LISTEN
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
