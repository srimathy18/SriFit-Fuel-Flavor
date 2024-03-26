const food = [
  {
    title: "Grilled Chicken Salad",
    ingredients: [
      { name: "Chicken Breast", quantity: "2 pieces" },
      { name: "Mixed Greens", quantity: "2 cups" },
      { name: "Cherry Tomatoes", quantity: "1 cup, halved" },
      { name: "Cucumber", quantity: "1, sliced" },
      { name: "Red Onion", quantity: "1/4, thinly sliced" },
      { name: "Olive Oil", quantity: "2 tablespoons" },
      { name: "Lemon Juice", quantity: "1 tablespoon" },
      { name: "Salt", quantity: "To taste" },
      { name: "Black Pepper", quantity: "To taste" },
    ],
    description:
      "A refreshing salad featuring grilled chicken breast, mixed greens, cherry tomatoes, cucumber, and red onion, tossed with olive oil and lemon juice dressing. Perfect for a light and healthy meal.",
    type: "salad",
    imgSrc:
      "https://www.eatingbirdfood.com/wp-content/uploads/2023/06/grilled-chicken-salad-hero.jpg",
  },
  {
    title: "Protein Smoothie",
    ingredients: [
      { name: "Banana", quantity: "1, ripe" },
      { name: "Spinach", quantity: "1 cup" },
      { name: "Almond Milk", quantity: "1 cup" },
      { name: "Protein Powder", quantity: "1 scoop" },
      { name: "Chia Seeds", quantity: "1 tablespoon" },
      { name: "Ice Cubes", quantity: "Handful" },
    ],
    type: "drink",
    description:
      "A delicious and nutritious smoothie made with ripe banana, spinach, almond milk, protein powder, chia seeds, and ice cubes. Ideal for a post-workout refuel or a quick breakfast on the go.",
    imgSrc:
      "https://www.eatingwell.com/thmb/JZ00DKa4QI8_hRstipASavKa9Pk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EWL-261428-chocolate-peanut-butter-protein-shake-Hero-02-e49db6f2f2db4c04b6f4807e54ca3ee0.jpg",
  },
  {
    title: "Quinoa and Vegetable Stir-Fry",
    ingredients: [
      { name: "Quinoa", quantity: "1 cup, cooked" },
      { name: "Broccoli", quantity: "1 cup, chopped" },
      { name: "Bell Pepper", quantity: "1, sliced" },
      { name: "Carrots", quantity: "1, sliced" },
      { name: "Snap Peas", quantity: "1 cup" },
      { name: "Garlic", quantity: "2 cloves, minced" },
      { name: "Ginger", quantity: "1 teaspoon, minced" },
      { name: "Soy Sauce", quantity: "2 tablespoons" },
      { name: "Sesame Oil", quantity: "1 tablespoon" },
    ],
    description:
      "A flavorful stir-fry dish made with quinoa, broccoli, bell pepper, carrots, snap peas, garlic, ginger, soy sauce, and sesame oil. Packed with protein and veggies, this dish is perfect for a quick and healthy meal.",
    type: "food",
    imgSrc:
      "https://www.hummusapien.com/wp-content/uploads/2019/08/Quinoa-Veggie-Stir-Fry-Sesame-Peanut-Sauce-3-683x1024-1.jpg",
  },
  {
    title: "Grilled Salmon with Asparagus",
    ingredients: [
      { name: "Salmon Fillet", quantity: "1, skin-on" },
      { name: "Asparagus", quantity: "1 bunch" },
      { name: "Olive Oil", quantity: "2 tablespoons" },
      { name: "Lemon", quantity: "1, sliced" },
      { name: "Garlic", quantity: "2 cloves, minced" },
      { name: "Salt", quantity: "To taste" },
      { name: "Black Pepper", quantity: "To taste" },
    ],
    type: "food",
    description:
      "Succulent grilled salmon fillet served with tender asparagus, seasoned with olive oil, lemon, garlic, salt, and black pepper. This dish offers a delightful blend of flavors and is rich in omega-3 fatty acids.",
    imgSrc:
      "https://assets.surlatable.com/m/44350397b5ed6d76/72_dpi_webp-REC_301896_Salmon_Asparagus.jpg",
  },
  {
    title: "Avocado Toast with Poached Egg",
    ingredients: [
      { name: "Whole Grain Bread", quantity: "2 slices, toasted" },
      { name: "Avocado", quantity: "1, mashed" },
      { name: "Egg", quantity: "1, poached" },
      { name: "Cherry Tomatoes", quantity: "1/2 cup, sliced" },
      { name: "Red Pepper Flakes", quantity: "To taste" },
      { name: "Salt", quantity: "To taste" },
      { name: "Black Pepper", quantity: "To taste" },
    ],
    description:
      "A hearty and wholesome breakfast or snack featuring mashed avocado and a perfectly poached egg on toasted whole grain bread, garnished with sliced cherry tomatoes, red pepper flakes, salt, and black pepper. A nutritious and delicious option to start your day.",
    type: "food",
    imgSrc:
      "https://radishrose.net/wp-content/uploads/2015/05/perfectly-poached-eggs-on-avocado-toast.jpg",
  },
  {
    title: "Green Protein Smoothie",
    ingredients: [
      { name: "Spinach", quantity: "2 cups" },
      { name: "Banana", quantity: "1, frozen" },
      { name: "Protein Powder", quantity: "1 scoop" },
      { name: "Almond Milk", quantity: "1 cup" },
      { name: "Chia Seeds", quantity: "1 tablespoon" },
      { name: "Honey", quantity: "1 tablespoon (optional)" },
      { name: "Ice Cubes", quantity: "Handful" },
    ],
    description:
      "A vibrant green smoothie packed with nutrient-rich ingredients including spinach, frozen banana, protein powder, almond milk, chia seeds, honey (optional), and ice cubes. A refreshing way to boost your protein intake and fuel your body.",
    type: "drink",
    imgSrc:
      "https://www.aspicyperspective.com/wp-content/uploads/2020/05/green-smoothie-recipe-10.jpg",
  },
  {
    title: "Greek Yogurt Parfait",
    ingredients: [
      { name: "Greek Yogurt", quantity: "1 cup" },
      { name: "Granola", quantity: "1/4 cup" },
      { name: "Mixed Berries", quantity: "1/2 cup" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Almonds", quantity: "Handful, sliced" },
      { name: "Cinnamon", quantity: "To taste" },
    ],
    description:
      "A delightful parfait made with creamy Greek yogurt layered with crunchy granola, mixed berries, honey, sliced almonds, and a sprinkle of cinnamon. A satisfying and wholesome treat that can be enjoyed for breakfast or as a healthy dessert option.",
    type: "food",
    imgSrc:
      "https://totaste.com/wp-content/uploads/2022/06/greek-yogurt-parfait.jpeg",
  },
  {
    title: "Tuna Salad Lettuce Wraps",
    ingredients: [
      { name: "Canned Tuna", quantity: "1 can, drained" },
      { name: "Lettuce Leaves", quantity: "4-6 leaves" },
      { name: "Celery", quantity: "1 stalk, chopped" },
      { name: "Red Onion", quantity: "1/4, diced" },
      { name: "Dill Pickles", quantity: "2, chopped" },
      { name: "Greek Yogurt", quantity: "2 tablespoons" },
      { name: "Dijon Mustard", quantity: "1 teaspoon" },
      { name: "Lemon Juice", quantity: "1 teaspoon" },
      { name: "Salt", quantity: "To taste" },
      { name: "Black Pepper", quantity: "To taste" },
    ],
    description:
      "Light and flavorful lettuce wraps filled with canned tuna, celery, red onion, dill pickles, Greek yogurt, Dijon mustard, lemon juice, salt, and black pepper. A protein-packed meal that's perfect for a quick lunch or snack.",
    type: "salad",
    imgSrc:
      "https://www.elizabethrider.com/wp-content/uploads/2021/12/no-cook-tuna-wraps-copyrightelizabethrider.jpg",
  },
  {
    title: "Sweet Potato and Black Bean Bowl",
    ingredients: [
      { name: "Sweet Potato", quantity: "1, large" },
      { name: "Black Beans", quantity: "1 can, drained and rinsed" },
      { name: "Avocado", quantity: "1, sliced" },
      { name: "Cherry Tomatoes", quantity: "1/2 cup, halved" },
      { name: "Red Onion", quantity: "1/4, diced" },
      { name: "Cilantro", quantity: "Handful, chopped" },
      { name: "Lime", quantity: "1, juiced" },
      { name: "Cumin", quantity: "1 teaspoon" },
      { name: "Smoked Paprika", quantity: "1/2 teaspoon" },
      { name: "Salt", quantity: "To taste" },
      { name: "Black Pepper", quantity: "To taste" },
    ],
    description:
      "A nourishing bowl featuring roasted sweet potato, black beans, avocado, cherry tomatoes, red onion, cilantro, lime juice, cumin, smoked paprika, salt, and black pepper. This bowl is bursting with flavors and loaded with vitamins and minerals.",
    type: "food",
    imgSrc:
      "https://www.createnourishlove.com/wp-content/uploads/2019/05/IMG_7360.jpg",
  },
  {
    title: "Oatmeal Banana Pancakes",
    ingredients: [
      { name: "Banana", quantity: "1, mashed" },
      { name: "Oats", quantity: "1/2 cup" },
      { name: "Egg", quantity: "1" },
      { name: "Almond Milk", quantity: "1/4 cup" },
      { name: "Baking Powder", quantity: "1/2 teaspoon" },
      { name: "Cinnamon", quantity: "1/2 teaspoon" },
      { name: "Vanilla Extract", quantity: "1/2 teaspoon" },
      { name: "Maple Syrup", quantity: "For serving" },
      { name: "Fresh Berries", quantity: "For serving" },
    ],
    description: "Fluffy pancakes made with mashed banana, oats, egg, almond milk, baking powder, cinnamon, and vanilla extract. Serve with maple syrup and fresh berries for a wholesome and satisfying breakfast option.",
    type: "food",
    imgSrc:
      "https://meaningfuleats.com/wp-content/uploads/2014/06/banana-oatmeal-pancakes.jpg",
  },
];
food.forEach((recipe) => {
  console.log(recipe.title);
});
export { food };
