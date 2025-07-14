import { useContext } from "react";
import { AppContext } from "./ContextProvider";
import Navbar1 from "./navbar1";
import Navbar2 from "./navbar2";
import Navbar3 from "./navbar3";
import Home1 from "./home1";
import Home2 from "./home2";
import Home3 from "./home3";
import Footer1 from "./footer1"
import Footer2 from "./footer2"
import Footer3 from "./footer3"
import { COMPONENT_TYPES } from "./constants";

export default function PrewievPage() {
    const { selectedNavbar, selectedHome, selectedFooter } = useContext(AppContext);

    // Bileşen mapping'leri
    const navbarComponents = {
        navbar1: Navbar1,
        navbar2: Navbar2,
        navbar3: Navbar3
    };

    const homeComponents = {
        home1: Home1,
        home2: Home2,
        home3: Home3
    };

    const footerComponents = {
        footer1: Footer1,
        footer2: Footer2,
        footer3: Footer3
    };

    // Seçili bileşenleri al
    const SelectedNavbar = navbarComponents[selectedNavbar];
    const SelectedHome = homeComponents[selectedHome];
    const SelectedFooter = footerComponents[selectedFooter];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar - Üstte sabit */}
            <div className="w-full flex-shrink-0">
                {SelectedNavbar && <SelectedNavbar />}
            </div>

            {/* Home - Ana içerik alanı, esnek büyüme */}
            <div className="flex-1 w-full">
                {SelectedHome && <SelectedHome />}
            </div>

            {/* Footer - Altta sabit */}
            <div className="w-full flex-shrink-0">
                {SelectedFooter && <SelectedFooter />}
            </div>
        </div>
    )
}