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

    const sortLocalList = (method) => {
        const newList = [...gamesState.localList];
        if (method === 'A-Z') {
            newList.sort((a, b) => a.name.localeCompare(b.name));
        } else if (method === 'Z-A') {
            newList.sort((a, b) => b.name.localeCompare(a.name));
        }
        setGamesState({ ...gamesState, localList: newList });
    };


    return { gamesState, setGamesState, handleFetchGames, sortLocalList };
};

export default useGames;
