function Searchbar({ filter, onChange }) {
  return (
    <>
      <header>
        <input
          name="inputValue"
          value={filter}
          onChange={onChange}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter participant name..."
        />
      </header>
    </>
  );
}

export default Searchbar;
