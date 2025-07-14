import { useContext } from "react";
import { AppContext } from "./ContextProvider";
import { SELECTOR_OPTIONS } from "./constants";

export default function NavbarSelector() {
  const { selectedNavbar, updateNavbar } = useContext(AppContext);

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center my-4 sm:my-8">
      {SELECTOR_OPTIONS.navbar.map((option) => (
        <button
          key={option.value}
          className={`px-3 sm:px-4 py-2 rounded font-semibold border transition text-sm sm:text-base ${selectedNavbar === option.value
              ? `${option.activeClass} text-white`
              : `bg-white text-${option.color} border-${option.color}`
            }`}
          onClick={() => updateNavbar(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}