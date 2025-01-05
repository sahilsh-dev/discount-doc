import express from "express";
import mongoose from "mongoose";
import Doctor from "./doctor.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

export default router;