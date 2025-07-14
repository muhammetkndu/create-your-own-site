import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [selectedNavbar, setSelectedNavbar] = useState(null);
    const [selectedHome, setSelectedHome] = useState(null);
    const [selectedFooter, setSelectedFooter] = useState(null);

    const updateNavbar = setSelectedNavbar;
    const updateHome = setSelectedHome;
    const updateFooter = setSelectedFooter;

    return (

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