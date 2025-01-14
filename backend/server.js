import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes.js";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./swagger-docs.json" with { type: "json" };

mongoose
  .connect("mongodb://localhost:27017/patientsDB")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", router);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
