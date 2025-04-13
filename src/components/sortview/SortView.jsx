import React from "react";

const SortView = ({ sortOption, onSortChange, viewMode, onViewChange }) => {
    return (
        <div className="flex items-center mx-5 justify-between md:justify-end gap-x-2">
            {/* sort by */}
            <div className="relative inline-block w-3/4 md:w-1/4">
                <select
                    className="appearance-none bg-[#3D4466] text-white text-base rounded-md px-3 py-2 pr-10 w-full"
                    value={sortOption}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="id-asc">Sort by ID (asc)</option>
                    <option value="id-desc">Sort by ID (desc)</option>
                    <option value="name-asc">Sort by Name (A-Z)</option>
                    <option value="name-desc">Sort by Name (Z-A)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white">
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.25908 0L6.6598 4.59L11.0605 0L12.4124 1.42L6.6598 7.42L0.907227 1.42L2.25908 0Z"
                            fill="#97A0CC"
                        />
                    </svg>
                </div>
            </div>

            {/* view mode toggle */}
            <div className="flex flex-row">
                <button
                    className={`p-3 rounded-l-md ${viewMode === "list" ? "bg-[#3D4466]" : "bg-[#0C1231]"}`}
                    onClick={() => onViewChange("list")}
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="14" height="14" fill="#97A0CC" />
                    </svg>
                </button>
                <button
                    className={`p-3 rounded-r-md ${viewMode === "grid" ? "bg-[#3D4466]" : "bg-[#0C1231]"}`}
                    onClick={() => onViewChange("grid")}
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="4" height="4" fill="#97A0CC" />
                        <rect x="8" y="1" width="4" height="4" fill="#97A0CC" />
                        <rect x="1" y="8" width="4" height="4" fill="#97A0CC" />
                        <rect x="8" y="8" width="4" height="4" fill="#97A0CC" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SortView;
