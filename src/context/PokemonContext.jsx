import { createContext, useContext, useState, useEffect } from 'react';

const PokemonContext = createContext();

export const usePokemon = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const getFromStorage = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaultValue;
  };

  const [searchTerm, setSearchTerm] = useState(() => getFromStorage("searchTerm", ""));
  const [sortOption, setSortOption] = useState(() => getFromStorage("sortOption", "id-asc"));
  const [viewMode, setViewMode] = useState(() => getFromStorage("viewMode", "list"));

  useEffect(() => {
    localStorage.setItem("searchTerm", JSON.stringify(searchTerm));
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem("sortOption", JSON.stringify(sortOption));
  }, [sortOption]);

  useEffect(() => {
    localStorage.setItem("viewMode", JSON.stringify(viewMode));
  }, [viewMode]);

  return (
    <PokemonContext.Provider value={{
      searchTerm, setSearchTerm,
      sortOption, setSortOption,
      viewMode, setViewMode
    }}>
      {children}
    </PokemonContext.Provider>
  );
};
