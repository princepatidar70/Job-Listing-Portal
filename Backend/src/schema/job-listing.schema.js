import mongoose from "mongoose";

const jobListingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    qualifications: [String],

    responsibilities: [String],

    location: {
      type: String,
      required: true,
    },

    salaryRange: {
      min: Number,
      max: Number,
    },

    datePosted: {
      type: Date,
      default: Date.now,
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    applications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Application" },
    ],
  }
  // { timestamps: true }
);

const JobListing = mongoose.model("JobListing", jobListingSchema);
export default JobListing;
