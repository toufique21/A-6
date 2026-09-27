"use client";

interface SortDropdownProps {
    sortBy: "duration" | "calories" | "rating";
    setSortBy: (value: "duration" | "calories" | "rating") => void;
}

const SortDropdown = ({ sortBy, setSortBy }: SortDropdownProps) => {
    return (
        <div>
            <select
                value={sortBy}
                onChange={(e) =>
                    setSortBy(
                        e.target.value as "duration" | "calories" | "rating"
                    )
                }
                className="rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white outline-none focus:border-[#ccff00]"
            >
                <option value="duration">Sort by Duration</option>
                <option value="calories">Sort by Calories</option>
                <option value="rating">Sort by Rating</option>
            </select>
        </div>
    );
};

export default SortDropdown;