import mongoose from "mongoose";

const { DB_URL } = process.env.DB_URL;

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(DB_URL, {
      dbName: "work-manager",
    });
    console.log("DB is connected....");
  } catch (error) {
    console.log("Failed to connect with DB");
    console.log(error);
  }
};
