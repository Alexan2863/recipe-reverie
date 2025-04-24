import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import RecipeList from "./Components/RecipeList";
import RecipeForm from "./Components/RecipeForm";
import RecipeDetail from "./Components/RecipeDetail";
import SearchBar from "./Components/SearchBar";
import EditRecipe from "./Components/EditRecipe";
import LoginForm from "./Components/LoginForm";
import MainLayout from "./layouts/MainLayout";

const API_URL =
  "https://recipe-app-cb403-default-rtdb.firebaseio.com/recipes.json";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { currentUser } = useAuth();
  const location = useLocation();

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
      const response = await axios.post(API_URL, newRecipe);
      console.log("Recipe added:", response.data);
      fetchRecipes();
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const query = searchQuery.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(query) ||
      recipe.ingredients?.toLowerCase().includes(query) ||
      recipe.author?.toLowerCase().includes(query)
    );
  });

  return (
    <>
      {!currentUser && location.pathname !== "/login" && (
        <div
          style={{
            backgroundColor: "#d6b760",
            color: "#131718",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          You are not logged in. <strong>Log in to add or edit recipes.</strong>
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              {currentUser && <RecipeForm onAddRecipe={addRecipe} />}
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <RecipeList recipes={filteredRecipes} />
            </MainLayout>
          }
        />

        <Route
          path="/recipes/:id"
          element={
            <MainLayout>
              <RecipeDetail recipes={recipes} />
            </MainLayout>
          }
        />

        <Route
          path="/edit/:id"
          element={
            <MainLayout>
              <EditRecipe recipes={recipes} setRecipes={setRecipes} />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={
            <MainLayout>
              <LoginForm />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
