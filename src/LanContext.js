import React, {createContext, useContext, useState} from "react";

const LanguageContext= createContext()


export function DisplayLanguage() {
    // access the values of LanguageContext
    const { lang, setLng } = useContext(LanguageContext);

    return (
        <>
            <select value={lang} onChange={(event) => {
                setLng(event.target.value)
            }}>
                <option>English</option>
                <option>Twi</option>
                <option>Spanish</option>
            </select>
            <h1>Selected Language is {lang}</h1>
        </>
    )

}
 export function Dd() {
   const [lang,setLng]= useState('')
    return (
        <LanguageContext.Provider value={{lang, setLng }}>
            <DisplayLanguage></DisplayLanguage>
        </LanguageContext.Provider>

    )
}




