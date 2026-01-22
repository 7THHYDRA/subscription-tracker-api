/** @format */

import mongoose from "mongoose";

import { PORT, NODE_ENV, DB_URI } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Database URI is not defined in .env.<development/production>.local",
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to MongoDB database in ${NODE_ENV} mode `);
  } catch (error) {
    console.error("Error connecting to database: ", error);
    process.exit(1);
  }
};

export default connectToDatabase;
