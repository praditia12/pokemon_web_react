import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ pokemon, viewMode }) => {
    const navigate = useNavigate();
    const { name, type, id, image } = pokemon;
    const handleClick = () => {
        navigate(`/detail/${id}`, { state: { pokemonData: pokemon } });
    };
    return (
        <div
            className={`bg-white text-gray-900 rounded-lg space-y-2 cursor-pointer ${
                viewMode === "grid" ? "px-4 py-5" : "p-4"
            }`}
            onClick={handleClick}
        >
            <div className={` ${viewMode === "grid" ? "hidden" : "flex flex-row justify-between"}`}>
                <span className="text-green-600 text-base font-bold">{type}</span>
                <span className="text-gray-500 text-base font-bold ">#{id}</span>
            </div>
            <img src={image} alt={name} className="w-full h-auto" />
            <p className="text-center font-semibold text-lg">{name}</p>
        </div>
    );
};

export default Card;
