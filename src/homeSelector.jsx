import { useContext } from "react";
import { AppContext } from "./ContextProvider";

export default function HomeSelector() {

  const { selectedHome, updateHome } = useContext(AppContext);
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center my-4 sm:my-8">
      <button
        className={`px-3 sm:px-4 py-2 rounded font-semibold border transition text-sm sm:text-base ${selectedHome === "home1" ? "bg-red-500 text-white" : "bg-white text-red-500 border-red-500"}`}
        onClick={() => updateHome("home1")}
      >
        Araba galerisi
      </button>
      <button
        className={`px-3 sm:px-4 py-2 rounded font-semibold border transition text-sm sm:text-base ${selectedHome === "home2" ? "bg-green-500 text-white" : "bg-white text-green-500 border-green-500"}`}
        onClick={() => updateHome("home2")}
      >
        Uçak Rezervasyonu
      </button>
      <button
        className={`px-3 sm:px-4 py-2 rounded font-semibold border transition text-sm sm:text-base ${selectedHome === "home3" ? "bg-blue-500 text-white" : "bg-white text-blue-500 border-blue-500"}`}
        onClick={() => updateHome("home3")}
      >
        Film Sitesi
      </button>
    </div>
  )
}