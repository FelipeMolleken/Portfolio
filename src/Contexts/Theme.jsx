import React, { useState, createContext } from "react";

export const Theme = createContext();

export function ThemeProvider(props) {
    const [isWhiteMode, setIsWhiteMode] = useState(false);
    return (
        <Theme.Provider value={[isWhiteMode, setIsWhiteMode]}>
            {props.children}
        </Theme.Provider>
    )
}