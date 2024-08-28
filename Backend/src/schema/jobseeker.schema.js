import mongoose from "mongoose";

const jobSeekerSchema = new mongoose.Schema(
  {
    name: {
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

    location: {type: String},

    resume: {
      file: String,
      parsedData: {
        skills: [String],
        education: [String],
        experience: [String],
      },
    },

    searchPreferences: {
      jobType: String,
      location: String,
      salaryRange: {
        min: Number,
        max: Number,
      },
    },

    applications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Application" },
    ],

    notifications: [{ type: String }],
   
  },
  { timestamps: true }
);

const JobSeeker = mongoose.model("JobSeeker", jobSeekerSchema);
export default JobSeeker;
