import { createContext, useContext, useState } from 'react';

const PokemonContext = createContext();

export const usePokemon = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('id'); 
  const [viewMode, setViewMode] = useState('list');   

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
