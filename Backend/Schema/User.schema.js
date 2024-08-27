import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
  role: {
    type: String,
    enum: ["job-seeker", "employer"],
    required: true,
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  profile: {
    bio: String,
    location: String,
    skills: [String],
    experience: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
