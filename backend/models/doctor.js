import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
  },
  consultationFee: {
    type: Number,
    required: true,
  },
  walletBalance: {
    type: Number,
    default: 0,
  },
  firstConsultationDiscount: {
    type: Number,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
