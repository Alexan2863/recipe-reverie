const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="d-flex justify-content-end mb-3">
      <input
        name="search"
        type="text"
        placeholder="Search by recipe name or ingredients..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-control w-auto"
        style={{ maxWidth: "400px", minWidth: "300px" }}
      />
    </div>
  );
};

export default SearchBar;
