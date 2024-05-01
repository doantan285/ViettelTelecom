import React from 'react';

const ButtonComponent = ({ onClick, className, children }) => {
    return (
        <button onClick={onClick} className={`rounded-r-lg rounded-tl-lg ${className}`}>
            {children}
        </button>
    );
};

export default ButtonComponent;
