import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected Sucessfully");
  } catch (error) {
    console.log("Error Connecting MongoDb", error);
    process.exit(1);
  }
};
