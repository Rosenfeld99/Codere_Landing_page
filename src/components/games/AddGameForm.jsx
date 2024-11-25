import React, { useState } from "react";
import useGames from "../../hooks/useGames";
import { IoClose } from "react-icons/io5";

const AddGameForm = () => {
    const { addNewGame } = useGames()
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        homeTeam: "",
        homeOdd: "",
        drawOdd: "",
        awayTeam: "",
        awayOdd: "",
        gameDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const formattedValue =
            name === "gameDate" ? new Date(value).toISOString() : value;
        setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Game Added:", formData);
        addNewGame(formData)
        setOpen(false)
    };

    const fields = [
        { label: "Home Team Name", name: "homeTeam", type: "text", placeholder: "Enter home team name" },
        { label: "Home Team Odd (1)", name: "homeOdd", type: "number", placeholder: "Enter home team odd", step: "0.01" },
        { label: "Draw Odd (x)", name: "drawOdd", type: "number", placeholder: "Enter draw odd", step: "0.01" },
        { label: "Away Team Name", name: "awayTeam", type: "text", placeholder: "Enter away team name" },
        { label: "Away Team Odd (2)", name: "awayOdd", type: "number", placeholder: "Enter away team odd", step: "0.01" },
    ];

    return (
        <div>
            {!open && <button
                onClick={() => setOpen(true)}
                className="flex items-center mx-auto lg:mx-0 gap-2 border-2 hover:scale-110 duration-150 border-[#79C000] text-[#fff] w-fit px-8 py-2 rounded-[50px]"
            >
                Add new game
            </button>}
            {open && (
                <div className=" flex items-center justify-center min-h-screen w-full bg-[#00000080] fixed inset-0 z-50">
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-lg w-full mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4 relative"
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className=" text-2xl absolute md:top-2 right-2 border-2 hover:scale-110 duration-150 border-[#d93535] text-[#d93535] w-fit rounded-[50px]"
                        >
                            <IoClose />
                        </button>
                        <h2 className="text-2xl font-semibold text-gray-800">Add Game</h2>
                        {fields.map(({ label, name, type, placeholder, step }) => (
                            <div key={name} className="space-y-2">
                                <label className="block text-gray-700 font-medium">{label}</label>
                                <input
                                    type={type}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    placeholder={placeholder}
                                    step={step}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#80bf31] focus:outline-none"
                                    required
                                />
                            </div>
                        ))}
                        {/* Date of Game */}
                        <div className="space-y-2">
                            <label className="block text-gray-700 font-medium">Date of Game</label>
                            <input
                                type="date"
                                name="gameDate"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#80bf31] focus:outline-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#80bf31] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#537d20] transition"
                        >
                            Add Game
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddGameForm;
