import { useContext } from "react";
import { AppProvider } from "./ContextProvider";
import Navbar1 from "./navbar1";
import Navbar2 from "./navbar2";
import Navbar3 from "./navbar3";


export default function PrewievPage(){
    const {selectdNavbar} = useContext(AppProvider);

    return(
        <div>
            {selectdNavbar === "navbar1" && <Navbar1 />}
            {selectdNavbar === "navbar2" && <Navbar2 />}
            {selectdNavbar === "navbar3" && <Navbar3 />}
        </div>
    )
}