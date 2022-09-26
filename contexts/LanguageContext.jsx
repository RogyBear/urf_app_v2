import React, {createContext, useState} from "react"

export const LanguageContext = createContext({});

export const LanguageProvider = ({value, children}) => {

    const [content, setContent] = useState();
    const [locale, setLocale] = useState();
    

    return (
        <LanguageContext.Provider value={{
          locale,
          setLocale
        }}>
            {children}
        </LanguageContext.Provider>
    );
};
