import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SortView from "../../components/sortview/SortView";
import ListCard from "../../components/list_card/ListCard";
import pokemonData from "../../data/pokemon/pokemonData";

import { useState } from "react";

const HomePage = () => {
    const [sortOption, setSortOption] = useState("id-asc");
    const [viewMode, setViewMode] = useState("grid");
    const [searchTerm, setSearchTerm] = useState("");

    const sortPokemons = (data, option) => {
        const sorted = [...data];
        switch (option) {
            case "id-desc":
                return sorted.sort((a, b) => b.id - a.id);
            case "name-asc":
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case "name-desc":
                return sorted.sort((a, b) => b.name.localeCompare(a.name));
            case "id-asc":
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
            <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <SortView
                sortOption={sortOption}
                onSortChange={setSortOption}
                viewMode={viewMode}
                onViewChange={setViewMode}
            />
            <ListCard pokemons={sortedPokemons} viewMode={viewMode} />
        </div>
    );
};

export default HomePage;
