import React, { useContext } from 'react';
import { ContextStore } from '../context/contextStore';
import axios from 'axios';

const useGames = () => {
    const { gamesState, setGamesState } = useContext(ContextStore);

    const handleFetchGames = async () => {
        setGamesState({ ...gamesState, loading: true }); // Set loading state before fetching
        try {
            const { data } = await axios.get(import.meta.env.VITE_API_GAME);
            console.log("Fetched Data:", data);

            if (data) {
                setGamesState((prevState) => ({
                    ...prevState,
                    gamesList: data,
                    localList: data[0]?.db,
                    loading: false,
                    error: null,
                }));
                sortLocalList("Default")
            }
        } catch (error) {
            console.error("Error Fetching Games:", error);
            setGamesState((prevState) => ({
                ...prevState,
                loading: false,
                error: "Something went wrong, please try again later.",
            }));
        }
    };

    const addNewGame = (newGame) => {
        setGamesState((prevState) => ({
            ...prevState,
            gamesList: [...(prevState[0]?.db?.gamesList || []), newGame], // Add new game to gamesList
            localList: [...prevState.localList, newGame], // Add new game to localList
            loading: false,
            error: null,
        }));
    };
    

    const sortLocalList = (method) => {
        const newList = [...gamesState.localList];
        console.log(newList); // Log to check the list

        if (method === 'A-Z') {
            newList.sort((a, b) => {
                const nameA = a.name || "";
                const nameB = b.name || "";
                return nameA.localeCompare(nameB);
            });
        } else if (method === 'Z-A') {
            newList.sort((a, b) => {
                const nameA = a.name || "";
                const nameB = b.name || "";
                return nameB.localeCompare(nameA);
            });
        } else {
            newList.sort((a, b) => {
                const dateA = new Date(a.startDate);
                const dateB = new Date(b.startDate);
                return dateA - dateB; // Ascending order
            });
        }
        setGamesState({ ...gamesState, localList: newList });
    };



    return { gamesState, setGamesState, handleFetchGames, sortLocalList,addNewGame };
};

export default useGames;
