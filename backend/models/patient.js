import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  walletBalance: {
    type: Number,
    default: 0,
  },
});

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
