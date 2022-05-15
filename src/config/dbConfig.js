import mongoose from "mongoose";

export const connectMongoDB = () => {
  const conStr = process.env.MONGO_CLIENT;
  console.log(conStr);
  try {
    const connect = mongoose.connect(conStr);
    connect && console.log("connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};
