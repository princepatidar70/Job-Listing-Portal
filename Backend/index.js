import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import userRoute from "./Routes/User.route";
dotenv.config();
const app = express();
app.use(express.json());

const DbURL = process.env.MONGODB_URI;
const port = process.env.PORT || 4002;

try {
  mongoose.connect(DbURL);
  console.log("connect to mongodb");
} catch (error) {
  console.log(" MongoDb connection Error", error);
}

// app.use("/user", userRoute)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
