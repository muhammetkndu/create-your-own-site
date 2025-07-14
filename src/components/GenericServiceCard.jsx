import React from "react";

const GenericServiceCard = ({
    icon,
    title,
    description,
    bgColor = "bg-red-600",
    iconColor = "text-white"
}) => {
    return (
        <div className="text-center">
            <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className={`${iconColor} text-2xl`}>{icon}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
};

export default GenericServiceCard; 