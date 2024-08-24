import mongoose from "mongoose";
import { DB_NAME } from '../constant';

// Connect to MongoDB
export const dbConnect = async () => {
  const dbURL = `${process.env.DB_URL}${DB_NAME}`;
  try {
    await mongoose.connect(dbURL);
    console.log("\n 👍DB🤗Connection🦋Successful🦚🐦‍🔥 \n");
  } catch (error) {
    console.log("\n DB Connection Failed❌ \n", error);
  }
}
