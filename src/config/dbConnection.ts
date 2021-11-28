import mongoose from "mongoose";
import { defaultConfig } from ".";

export const connectDB = async () => {
  try {
    await mongoose.connect(defaultConfig.mongoURI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
