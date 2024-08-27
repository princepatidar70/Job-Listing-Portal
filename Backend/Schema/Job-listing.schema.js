import mongoose from "mongoose";

const jobListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: Number,
  employmentType: {
    type: String,
    enum: ["full-time", "part-time", "internship"],
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
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],
});

const JobListing = mongoose.model("JobListing", jobListingSchema);
export default JobListing;
