import React, { useState } from 'react';

import PrevIcon from '~/assets/icons/chevron-left.svg';
import NextIcon from '~/assets/icons/chevron-right.svg';

export default function Slide({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
    };
    
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
    };
    
    return (
        <div className="group relative w-full h-[500px] overflow-hidden">
            <button
                className="hidden group-hover:flex absolute z-10 left-6 top-1/2 transform -translate-y-1/2 justify-center items-center border bg-slate-400 w-14 h-14 rounded-full"
                onClick={handlePrevClick}
            >
                <img src={PrevIcon} alt="Previous button" />
            </button>
            <div className='flex'>
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
                    >
                        <div className="flex-shrink-0 w-screen h-[500px]">
                            <img
                                className="object-cover w-full h-full"
                                src={slide.content}
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="hidden group-hover:flex absolute z-10 right-6 top-1/2 transform -translate-y-1/2 justify-center items-center border bg-slate-400 w-14 h-14 rounded-full"
                onClick={handleNextClick}
            >
                <img src={NextIcon} alt="Next button" />
            </button>
        </div>
    );
}

