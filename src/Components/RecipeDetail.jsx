import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./RecipeDetail.module.css";
import Button from "./UI/Button";

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === id);

  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (!confirm) return;

    try {
      await axios.delete(
        `https://recipe-app-cb403-default-rtdb.firebaseio.com/recipes/${id}.json`
      );
      navigate("/");
    } catch (error) {
      console.error("Failed to delete recipe:", error);
      alert("Something went wrong. Try again.");
    }
  };

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className={classes.content}>
      <Button to="/" className="mb-3">
        &larr; Back to Recipes
      </Button>
      <div>
        <h2>
          <strong>{recipe.name}</strong>
        </h2>
        <p>{recipe.description}</p>
        <h4>
          <strong>Ingredients</strong>
        </h4>
        <ul>
          {recipe.ingredients.split(",").map((ingredient, index) => (
            <li key={index}>{ingredient.trim()}</li>
          ))}
        </ul>
        <h4>
          <strong>Instructions</strong>
        </h4>
        <p>{recipe.instructions}</p>
      </div>

      <div className="d-flex justify-content-end">
        <Button
          className="mt-3 me-2 btnBorderReveal"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Edit Recipe
        </Button>

        <button className=" btn btn-danger mt-3" onClick={handleDelete}>
          Delete Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
