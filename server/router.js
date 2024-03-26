import express from "express";
import FoodRecipe from "./FoodRecipe.js";
const router = express.Router();

router.get("/recipes/:type", async (req, res) => {
  const { type } = req.params;

  try {
    const recipes = await FoodRecipe.find({ type }); // Find recipes by type
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/recipes", async (req,res) =>{
    try {
        const recipes = await FoodRecipe.find({});
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Route to add a new recipe
router.post("/recipes/add", async (req, res) => {
  const { title, ingredients, type, imgSrc, description } = req.body;

  try {
    const newRecipe = new FoodRecipe({
      title,
      ingredients,
      type,
      imgSrc,
      description
    });

    const savedRecipe = await newRecipe.save(); // Save the new recipe
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
