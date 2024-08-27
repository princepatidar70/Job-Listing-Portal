import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobListing",
    required: true,
  },
  applicantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  resume: {
    type: File,
    required: true,
  },
  coverLetter: String,
  status: {
    type: String,
    enum: ["submitted", "reviewed", "interviewed", "hired", "rejected"],
    default: "submitted",
  },
  dateApplied: {
    type: Date,
    default: Date.now,
  },
});

const Application = mongoose.model("Application", applicationSchema);
export default Application;
