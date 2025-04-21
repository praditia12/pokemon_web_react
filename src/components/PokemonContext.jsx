import { createContext, useContext, useState } from 'react';

const PokemonContext = createContext();

export const usePokemon = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterHP, setFilterHP] = useState('');

  return (
    <PokemonContext.Provider value={{
      searchTerm, setSearchTerm,
      filterType, setFilterType,
      filterHP, setFilterHP
    }}>
      {children}
    </PokemonContext.Provider>
  );
};
