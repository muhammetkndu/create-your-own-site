import { createContext, useState} from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [selectedNavbar, setSelectedNavbar] = useState(null);

    const updateNavbar = (navbarId) => {setSelectedNavbar(navbarId)}


    return(

    <AppContext.Provider value={{ updateNavbar, selectedNavbar}}>
        {children}
    </AppContext.Provider>

    )

}