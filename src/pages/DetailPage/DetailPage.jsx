import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const DetailPage = () => {
    const location = useLocation();
    const { pokemonData } = location.state || {};

    if (!pokemonData) return <p>Data tidak tersedia</p>;

    return (
        <div className="flex flex-col gap-y-3 bg-[#252A3E] min-h-screen pb-5">
            <Navbar />
            <div className="flex flex-row mx-6">
                <p className="text-lg text-gray-400">#{pokemonData.id}</p>
            </div>
            <img src={pokemonData.image} alt={pokemonData.name} className="w-2/4 h-auto mx-auto" />
            <div className="flex flex-row mx-6 items-center justify-between">
                <p className="text-4xl font-bold text-white">{pokemonData.name}</p>
                <img src={pokemonData.image} alt={pokemonData.name} className="w-1/6 h-auto" />
            </div>
            <div className="flex flex-col mx-6 p-5 bg-[#05091B] rounded-lg">
                <div className="flex flex-col">
                    <p className="text-base text-[#97A0CC]">Health</p>
                    <div className="w-full h-[6px] bg-[#3D4466] rounded-full overflow-hidden mb-2">
                        <div
                            className="h-full bg-gradient-to-r from-[#6CF0A1] to-[#2AE3B7] rounded-full transition-all duration-300"
                            style={{ width: `${(pokemonData.currentHealth / pokemonData.maxHealth) * 100}%` }}
                        />
                    </div>
                    <div className="flex flex-row text-white gap-x-2 items-center">
                        <p className="text-2xl font-bold">{pokemonData.currentHealth}</p>
                        <p className="text-base font-medium">from {pokemonData.maxHealth}</p>
                    </div>
                    <div className="py-2">
                        <div className="w-full h-[1px] bg-[#3D4466]"></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col">
                            <p className="text-base text-[#97A0CC]">Attack</p>
                            <p className="text-2xl font-bold text-white">{pokemonData.attack}</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-base text-[#97A0CC]">Defense</p>
                            <p className="text-2xl font-bold text-white">{pokemonData.defense}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
