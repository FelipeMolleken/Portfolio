import React, { useState, createContext } from "react";
// import dataEN from './components/en.json';
import dataEN from '../JsonLanguage/en.json';

export const LanguageContext = createContext();


export function LanguageProvider(props) {
   
    const [data, setData] = useState(dataEN);
    
    return (
        <LanguageContext.Provider value={[data, setData]}>
            {props.children}
        </LanguageContext.Provider>
    )
}