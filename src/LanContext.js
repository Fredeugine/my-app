import React, {createContext, useContext, useState} from "react";

const LanguageContext= createContext()


export function DisplayLanguage() {
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




