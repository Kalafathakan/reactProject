import { useState } from 'react';


// Vishnu's part for Search Engine

type SearchProps = {
  filterMenu:(title: string) => void
}

const Search = (props: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    props.filterMenu(e.target.value);
  };
  return (
    <div id="searchbar">
      Search: 
      <input
        type='text'
        placeholder='search'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
