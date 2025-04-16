import React from "react";
import useRecipeForm from "./hooks/useRecipeForm";

const RecipeForm = ({ onAddRecipe }) => {
  const { values, errors, handleChange, handleSubmit } = useRecipeForm(
    { name: "", description: "", ingredients: "", instructions: "" },
    onAddRecipe
  );

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label htmlFor="name" className="text-white">
        Recipe Name
      </label>
      <input
        type="text"
        name="name"
        placeholder="Recipe Name"
        value={values.name}
        onChange={handleChange}
        className="form-control mb-3"
        style={{ backgroundColor: "#f7f7f7" }}
      />
      {errors.name && <small className="text-danger">{errors.name}</small>}

      <label htmlFor="description" className="text-white">
        Short description
      </label>
      <input
        type="text"
        name="description"
        placeholder="Short Description"
        value={values.description}
        onChange={handleChange}
        className="form-control mb-3"
        style={{ backgroundColor: "#f7f7f7" }}
      />
      {errors.description && (
        <small className="text-danger">{errors.description}</small>
      )}
      <label htmlFor="ingredients" className="text-white">
        Ingredients
      </label>
      <textarea
        name="ingredients"
        placeholder="Ingredients, separated by commas"
        value={values.ingredients}
        onChange={handleChange}
        className="form-control mb-3"
        style={{ backgroundColor: "#f7f7f7" }}
      />
      {errors.ingredients && (
        <small className="text-danger">{errors.ingredients}</small>
      )}

      <label htmlFor="instructions" className="text-white">
        Instructions
      </label>
      <textarea
        name="instructions"
        placeholder="Instructions"
        value={values.instructions}
        onChange={handleChange}
        className="form-control mb-3"
        style={{ backgroundColor: "#f7f7f7" }}
      />
      {errors.instructions && (
        <small className="text-danger">{errors.instructions}</small>
      )}

      <label htmlFor="author" className="text-white">
        Author's Name
      </label>
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={values.author}
        onChange={handleChange}
        className="form-control mb-3"
        style={{ backgroundColor: "#f7f7f7" }}
      />
      {errors.author && (
        <small className="text-danger" style={{ display: "block" }}>
          {errors.author}
        </small>
      )}

      <div className="d-flex justify-content-end">
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "#ffba08" }}
        >
          Add Recipe
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
