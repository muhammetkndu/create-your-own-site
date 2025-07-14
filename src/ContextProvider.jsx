import { createContext, useState} from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [selectedNavbar, setSelectedNavbar] = useState(null);
    const [selectedHome, setSelectedHome] = useState(null);
    const [selectedFooter, setSelectedFooter] = useState(null);

    const updateNavbar = (navbarId) => {setSelectedNavbar(navbarId)}
    const updateHome = (homeId) => {setSelectedHome(homeId)}
    const updateFooter = (footerId) => {setSelectedFooter(footerId)}

    return(

    <AppContext.Provider value={{
        updateNavbar, 
        selectedNavbar,
        selectedHome,
        updateHome,
        updateFooter,
        selectedFooter
        }}>
        {children}
    </AppContext.Provider>

    )

}