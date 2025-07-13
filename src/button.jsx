import React from "react";

const Button = ({onClick, children, className= "", type= "button", disabled= false}) => {
    const baseClass = "px-4 py-3 rounded font-semibold transition-colors duration-200 focus:outline-none"

    return(
        <>
        <button
        type={type}
        className={`${baseClass} ${className}`}
        onClick={onClick}
        disabled= {disabled}
        >
            {children}
        </button>
        </>
    );
};
export default Button;