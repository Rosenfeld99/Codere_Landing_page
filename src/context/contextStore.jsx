import { createContext, useState } from "react";

const ContextStore = createContext(null)

const ContextProvider = ({ children }) => {

    const [gamesState, setGamesState] = useState({
        loading: true,
        error: null,
        gamesList: null
    })

    return (
        <ContextStore.Provider
            value={{ gamesState, setGamesState }}
        >
            {children}
        </ContextStore.Provider>
    )
}

export { ContextStore, ContextProvider }

