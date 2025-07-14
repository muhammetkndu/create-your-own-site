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

export default function PrewievPage() {
    const { selectedNavbar, selectedHome, selectedFooter } = useContext(AppContext);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar - Üstte sabit */}
            <div className="w-full flex-shrink-0">
                {selectedNavbar === "navbar1" && <Navbar1 />}
                {selectedNavbar === "navbar2" && <Navbar2 />}
                {selectedNavbar === "navbar3" && <Navbar3 />}
            </div>

            {/* Home - Ana içerik alanı, esnek büyüme */}
            <div className="flex-1 w-full">
                {selectedHome === "home1" && <Home1 />}
                {selectedHome === "home2" && <Home2 />}
                {selectedHome === "home3" && <Home3 />}
            </div>

            {/* Footer - Altta sabit */}
            <div className="w-full flex-shrink-0">
                {selectedFooter === "footer1" && <Footer1 />}
                {selectedFooter === "footer2" && <Footer2 />}
                {selectedFooter === "footer3" && <Footer3 />}
            </div>
        </div>
    )
}