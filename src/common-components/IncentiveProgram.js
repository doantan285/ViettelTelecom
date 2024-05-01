import React from 'react';

export default function IncentiveProgram({ image, text }) {
    return (
        <a href="/">
            <div className="relative group h-[440px] w-[358.5px] overflow-hidden rounded-lg rounded-bl-none">
                <img className="group-hover:scale-105 duration-300" src={image} alt="" />
                <p className="absolute flex items-center opacity-0 group-hover:opacity-100 duration-500 bg-[#ee0033] h-[102px] w-full px-[20px] text-white text-xl bottom-0">
                    {text}
                </p>
            </div>
        </a>
    );
}
