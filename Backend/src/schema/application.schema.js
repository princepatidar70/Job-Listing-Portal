import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    jobSeeker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobSeeker",
      required: true,
    },

    jobListing: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobListing",
      required: true,
    },

    coverLetter: String,

    resume: {
      type: File,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Accepted", "Rejected"],
      default: "Pending",
    },
    dateApplied: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);
export default Application;
