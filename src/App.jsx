import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImage from "./assets/banner.jpg";

const API_URL =
  "https://recipe-app-cb403-default-rtdb.firebaseio.com/recipes.json";

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data) {
        const loadedRecipes = Object.entries(response.data)
          .map(([id, recipe]) => ({ id, ...recipe }))
          .filter(
            (recipe) => recipe.name && recipe.ingredients && recipe.instructions
          );
        setRecipes(loadedRecipes);
      } else {
        setRecipes([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const addRecipe = async (newRecipe) => {
    try {
      await axios.post(API_URL, newRecipe);
      fetchRecipes();
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <div className="container mt-4">
      <img
        src={bannerImage}
        alt="Five gray spoons filled with assorted spice powders near chilli peppers by Calum Lewis."
        className="banner-img"
      />
      <h1 className="text-center text-white">Recipe App</h1>
      <RecipeForm onAddRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
