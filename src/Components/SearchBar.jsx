import classes from "./SearchBar.module.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-3 text-white w-100">
      <input
        name="search"
        type="text"
        placeholder="Search by recipe name, ingredient, or author..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={`form-control w-100 text-white ${classes.placeholder}`}
        style={{
          backgroundColor: "#131718",
          border: "1px solid white",
          color: "white",
        }}
      />
    </div>
  );
};

export default SearchBar;
