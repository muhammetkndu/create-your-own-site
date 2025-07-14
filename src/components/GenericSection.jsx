import React from "react";
import { commonStyles } from "../utils/styles";

const GenericSection = ({
    title,
    children,
    className = "",
    containerClassName = "",
    titleClassName = ""
}) => {
    return (
        <div className={`${commonStyles.section.container} ${className}`}>
            <div className={`max-w-7xl mx-auto ${containerClassName}`}>
                {title && (
                    <h2 className={`${commonStyles.section.title} ${titleClassName}`}>
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </div>
    );
};

export default GenericSection; 