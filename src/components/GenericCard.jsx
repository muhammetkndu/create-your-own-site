import React from "react";
import { commonStyles } from "../utils/styles";

const GenericCard = ({
    image,
    title,
    description,
    price,
    buttonText,
    onButtonClick,
    imageAlt = "Card image"
}) => {
    return (
        <div className={commonStyles.card.base}>
            <img
                src={image}
                alt={imageAlt}
                className={commonStyles.card.image}
            />
            <div className={commonStyles.card.content}>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    {price && <span className="text-2xl font-bold text-red-600">{price}</span>}
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                        onClick={onButtonClick}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GenericCard; 