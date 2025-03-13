import React from "react";
// import RecipeList from "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="container">
      <div className="row">
        {recipes.length === 0 ? (
          <p className="col-12 text-center">No recipes available.</p>
        ) : (
          recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="col-md-6 d-flex align-items-stretch mb-3 cardBody"
            >
              <div className="card w-100">
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">
                    <strong>Ingredientss:</strong> {recipe.ingredients}
                  </p>
                  <p className="card-text">
                    <strong>Instructions:</strong> {recipe.instructions}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;
