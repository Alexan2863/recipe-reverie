import classes from "./SearchBar.module.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="d-flex justify-content-end mb-3 text-white">
      <input
        name="search"
        type="text"
        placeholder="Search by recipe name or ingredients..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={`form-control w-auto text-white ${classes.placeholder}`}
        style={{
          maxWidth: "400px",
          minWidth: "300px",
          backgroundColor: "#131718",
          border: "1px solid white",
          color: "white",
        }}
      />
    </div>
  );
};

export default SearchBar;
