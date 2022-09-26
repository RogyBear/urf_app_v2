import React, {createContext, useState, useEffect, ReactNode} from "react"




export const DataContext = createContext({});

export const DataProvider = ({value, children}) => {

    const [basicInformation, setBasicInformation] = useState();
    

    return (
        <DataContext.Provider value={{

        }}>
            {children}
        </DataContext.Provider>
    );
};
