/** steps to make the search component: !!!
 * - crear funcion handleSearch para obtener los valores de busqueda que el usuario escribe en el input
 * - crear interface para tipar la funcion onSearch y el argumento que recibe
 * - crear un useState para manejar los cambios en el input cuando escriban
 * - the VALUE and and the ONCHANGE event of the input would control what the is being typed, with the onchange event we update the input value
 */

import { useState } from "react";


interface Props {
  placeholder: string;
  OnSearchValue: (valueSearch: string) => void;
}

const SearchBar = ({ placeholder = "search", OnSearchValue }: Props) => {

  const [inputSearch, setInputSearch] = useState('');

  const handleSearch = () => {
    OnSearchValue(inputSearch);
    setInputSearch('');
  };

  // buscra a traves de presionar enter !! 
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      OnSearchValue(inputSearch);
      setInputSearch('');
    }
  };

  return (
    <div className="search-container">
      <input type="text"
        placeholder={placeholder}
        value={inputSearch}
        onKeyDown={(e) => (handleKeyDown(e))}
        onChange={(event) => setInputSearch(event.target.value)}
      />
      <button
        onClick={handleSearch}
      >GET IT</button>
    </div>
  );
};
export default SearchBar;