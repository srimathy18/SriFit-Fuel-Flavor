import mongoose from "mongoose";
import FoodRecipe from "./FoodRecipe.js";
import { food } from "./seedingData.js";

// MongoDB Atlas connection URI
const uri =
  "mongodb+srv://srimathy:srimathy123@cluster0.kqqxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoDB connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Food-Recipes",
};

// Connect to MongoDB Atlas
mongoose
  .connect(uri, options)
  .then(async () => {
    console.log("Connected to MongoDB Atlas");
    try {
      await FoodRecipe.insertMany(food);
      console.log("Feed data inserted successfully");
    } catch (error) {
      console.log("Error inserting feed data:", error);
    }
  })
  .catch((error) => console.error("Error connecting to MongoDB Atlas:", error));

// Get the default connection
const db = mongoose.connection;

// Event listeners for MongoDB connection
db.on("error", () => {
  console.error.bind(console, "MongoDB connection error:");
  process.exit(1);
});
db.once("open", () => {
  console.log("MongoDB connected successfully");
});

export default db;
