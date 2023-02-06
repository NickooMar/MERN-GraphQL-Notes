import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

mongoose.set("strictQuery", false);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`Mongodb connected: ${conn.connection.name}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
