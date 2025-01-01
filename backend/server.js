import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

mongoose
  .connect("mongodb://localhost:27017/patienDB")
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

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
