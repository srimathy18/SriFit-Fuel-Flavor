import mongoose from 'mongoose';

// Define the schema
const foodRecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: [{
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: String, // You can change the type to a more appropriate one, like Number, if needed
      required: true
    }
  }],
  type: {
    type: String,
    enum: ['food', 'drink', 'salad'], // Restricting the type to these values
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Create a model from the schema
const FoodRecipe = mongoose.model('FoodRecipe', foodRecipeSchema);

export default FoodRecipe;
