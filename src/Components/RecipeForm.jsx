import React from "react";
import useRecipeForm from "./hooks/useRecipeForm";

const RecipeForm = ({ onAddRecipe }) => {
  const { values, errors, handleChange, handleSubmit } = useRecipeForm(
    { name: "", ingredients: "", instructions: "" },
    onAddRecipe
  );

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="name"
        placeholder="Recipe Name"
        value={values.name}
        onChange={handleChange}
        className="form-control mb-2"
      />
      {errors.name && <small className="text-danger">{errors.name}</small>}
      <textarea
        name="ingredients"
        placeholder="Ingredients, separated by commas"
        value={values.ingredients}
        onChange={handleChange}
        className="form-control mb-2"
      />
      {errors.ingredients && (
        <small className="text-danger">{errors.ingredients}</small>
      )}
      <textarea
        name="instructions"
        placeholder="Instructions"
        value={values.instructions}
        onChange={handleChange}
        className="form-control mb-2"
      />
      {errors.instructions && (
        <small className="text-danger">{errors.instructions}</small>
      )}
      <button
        type="submit"
        className="btn"
        style={{ backgroundColor: "#ffba08" }}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default RecipeForm;
