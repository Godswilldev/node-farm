import dotenv from "dotenv";
import mongoose from "mongoose";
import { app } from "./app";

dotenv.config({
  path: "config.env",
});

const DB = process.env.MONGO_LOCAL_DB_URL || "";

const connectToDatabase = async () => {
  await mongoose.connect(DB);
  console.log("******DATABASE CONNECTED******");
};

const port = process.env.PORT || 4289;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  connectToDatabase();
});
