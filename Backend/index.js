import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./src/routes/user.js";
import { config } from "./src/config/config.js";
const app = express();
app.use(cors());
app.use(express.json());

const DbURL = process.env.MONGODB_URI;
const port = process.env.PORT || 4201;

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1); 
  }
};

connectDB();

app.use('/api/user', userRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${port}`);
});
