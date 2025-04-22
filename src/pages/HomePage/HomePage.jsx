import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SortView from "../../components/sortview/SortView";
import ListCard from "../../components/list_card/ListCard";
import pokemonData from "../../data/pokemon/pokemonData";
import { usePokemon } from "../../context/PokemonContext";

const HomePage = () => {
    const {
        sortOption,
        viewMode,
        searchTerm,
    } = usePokemon();

    const sortPokemons = (data, option) => {
        const sorted = [...data];
        switch (option) {
            case "name":
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case "attack":
                return sorted.sort((a, b) => b.attack - a.attack);
            case "defense":
                return sorted.sort((a, b) => b.defense - a.defense);
            case "id":
            default:
                return sorted.sort((a, b) => a.id - b.id);
        }
    };

    const filteredPokemons = pokemonData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedPokemons = sortPokemons(filteredPokemons, sortOption);

    return (
        <div className="flex flex-col gap-y-4 bg-[#252A3E] min-h-screen">
            <Navbar />
            <SortView />
            <ListCard pokemons={sortedPokemons} viewMode={viewMode} />
        </div>
    );
};

export default HomePage;
