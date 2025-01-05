import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transactionSchema = new mongoose.Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctorId: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  discountApplied: {
    type: Boolean,
    default: false,
  },
  discountPercentage: {
    type: Number,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
