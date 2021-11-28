import mongoose from "mongoose";

const dbUrl = " mongodb://127.0.0.1:27017";

export const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
