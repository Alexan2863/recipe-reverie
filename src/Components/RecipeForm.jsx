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
        id="name"
        type="text"
        name="name"
        placeholder={errors.name || "Recipe Name"}
        value={values.name}
        onChange={handleChange}
        className={`form-control mb-3 ${errors.name ? "is-invalid" : ""}`}
        style={{ backgroundColor: "#f7f7f7" }}
      />

      <label htmlFor="description" className="text-white">
        Short description
      </label>
      <input
        id="description"
        type="text"
        name="description"
        placeholder={errors.description || "Short Description"}
        value={values.description}
        onChange={handleChange}
        className={`form-control mb-3 ${
          errors.description ? "is-invalid" : ""
        }`}
        style={{ backgroundColor: "#f7f7f7" }}
      />

      <label htmlFor="ingredients" className="text-white">
        Ingredients
      </label>
      <textarea
        id="ingredients"
        name="ingredients"
        placeholder={errors.ingredients || "Ingredients, separated by commas"}
        value={values.ingredients}
        onChange={handleChange}
        className={`form-control mb-3 ${
          errors.ingredients ? "is-invalid" : ""
        }`}
        style={{ backgroundColor: "#f7f7f7" }}
      />

      <label htmlFor="instructions" className="text-white">
        Instructions
      </label>
      <textarea
        id="instructions"
        name="instructions"
        placeholder={errors.instructions || "Instructions"}
        value={values.instructions}
        onChange={handleChange}
        className={`form-control mb-3 ${
          errors.instructions ? "is-invalid" : ""
        }`}
        style={{ backgroundColor: "#f7f7f7" }}
      />

      <label htmlFor="author" className="text-white">
        Author's Name
      </label>
      <input
        id="author"
        type="text"
        name="author"
        placeholder={errors.author || "Author"}
        value={values.author}
        onChange={handleChange}
        className={`form-control mb-3 ${errors.author ? "is-invalid" : ""}`}
        style={{ backgroundColor: "#f7f7f7" }}
      />

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
