import { useState } from 'react'

const SearchBar = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const inputChange = (evt) => {
    const inputValue = evt.target.value;
    setQuery(inputValue);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(query);
    // Викликаем функцію пропс і записуємо в form
    onSubmit(query);
    setQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={inputChange}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;