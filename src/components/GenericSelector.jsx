import React from "react";

const GenericSelector = ({
    options,
    selectedValue,
    onSelect,
    className = ""
}) => {
    return (
        <div className={`flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center my-4 sm:my-8 ${className}`}>
            {options.map((option) => (
                <button
                    key={option.value}
                    className={`px-3 sm:px-4 py-2 rounded font-semibold border transition text-sm sm:text-base ${selectedValue === option.value
                            ? `${option.activeClass} text-white`
                            : `bg-white text-${option.color} border-${option.color}`
                        }`}
                    onClick={() => onSelect(option.value)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};

export default GenericSelector; 