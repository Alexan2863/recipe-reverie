import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  return (
    <div className="container">
      <div className="row">
        {recipes.length === 0 ? (
          <p className="col-12 text-center text-white">No recipes found.</p>
        ) : (
          recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="col-md-6 d-flex align-items-stretch mb-3"
            >
              <Link
                to={`/recipes/${recipe.id}`}
                className="card w-100 text-decoration-none text-dark"
              >
                <div
                  className="card-body"
                  style={{
                    backgroundColor: "#131718",
                    border: "1px solid white",
                  }}
                >
                  <h5 className="card-title text-white">{recipe.name}</h5>
                  <p className="card-text text-white">{recipe.description}</p>
                  <p
                    className="card-text text-white"
                    style={{ textAlign: "right" }}
                  >
                    Author: {recipe.author}
                  </p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;
