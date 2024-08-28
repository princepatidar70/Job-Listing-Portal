import dotenv from "dotenv";

dotenv.config();

export const config ={
        port: process.env.PORT || 4201,
        mongoURI:  process.env.MONGODB_URI || 'mongodb://localhost:27017/job-listing-portal',
        // jwtSecret: process.env.JWT_SECRET || 'your_default_jwt_secret',
      
}