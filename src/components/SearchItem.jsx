const SearchItem = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" className="sr-only">
        Search Item
      </label>

      <input
        type="text"
        placeholder="Search Item"
        autoComplete="off"
        id="search"
        className="p-3 rounded-md outline-none border border-solid border-gray-400
      drop-shadow mb-5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
