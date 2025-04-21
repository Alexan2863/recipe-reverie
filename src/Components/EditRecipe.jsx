import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./UI/Button";

const EditRecipe = ({ recipes, setRecipes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((recipe) => recipe.id === id);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    ingredients: "",
    instructions: "",
  });

  useEffect(() => {
    if (recipe) {
      setFormData({ ...recipe });
    }
  }, [recipe]);

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(
        `https://recipe-app-cb403-default-rtdb.firebaseio.com/recipes/${id}.json`,
        formData
      );

      const updated = recipes.map((r) =>
        recipe.id === id ? { ...recipe, ...formData } : recipe
      );
      setRecipes(updated);

      navigate(`/recipes/${id}`);
    } catch (error) {
      console.error("Failed to update recipe:", error);
      alert("Could not update recipe.");
    }
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-4"
      style={{
        backgroundColor: "#131718",
        borderRadius: "8px",
        border: "1px solid white",
      }}
    >
      <h2>Edit Recipe</h2>
      <div className="mb-3">
        <label>Name</label>
        <input
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Description</label>
        <textarea
          className="form-control"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Ingredients (comma-separated)</label>
        <textarea
          className="form-control"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Instructions</label>
        <textarea
          className="form-control"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit">Save Changes</Button>
    </form>
  );
};

export default EditRecipe;
