import mongoose from "mongoose";
const employerSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    contactInfo: {
      phone: String,
      address: String,
    },

    // industry: String,

    jobListings: [{ type: mongoose.Schema.Types.ObjectId, ref: "JobListing" }],

    notifications: [{ type: String }],
  },
  { timestamps: true }
);

const Employer = mongoose.model("Employer", employerSchema);
export default Employer;
