import React, { useState } from 'react';
import MobileServicePackage from './MobileServicePackage';

import PrevIcon from '~/assets/icons/chevron-left.svg';
import NextIcon from '~/assets/icons/chevron-right.svg';

export default function MobileServiceContent({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
    };
    return (
        <div className="relative mb-16 mt-14">
            <button
                className="absolute z-10 left-[-100px] top-1/2 transform -translate-y-1/2 flex justify-center items-center border bg-white border-transparent hover:border-[#ee0033] duration-300 w-9 h-9 rounded-full"
                onClick={handlePrevClick}
            >
                <img className="h-7 w-7" src={PrevIcon} alt="Previous button" />
            </button>
            <div className="flex gap-7">
                {[0, 1, 2].map((offset) => {
                    const index = (currentIndex + offset) % slides.length;
                    return (
                        /**
                         * MobileServicePackage: các gói dịch vụ điện thoại
                         * props:
                         * - img: ảnh gói dịch vụ
                         * - name: tên gói
                         * - price: giá gói
                         * - content: nội dung gói
                         * - href: đường link tới trang dịch vụ
                         */
                        <MobileServicePackage
                            key={slides[index].id}
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${offset * (392 + 7)}px)` }}
                            img={slides[index].img}
                            name={slides[index].name}
                            price={slides[index].price}
                            content={slides[index].content}
                            href={slides[index].href}
                        />
                    );
                })}
            </div>
            <button
                className="absolute z-10 right-[-100px] top-1/2 transform -translate-y-1/2 flex justify-center items-center border bg-white border-transparent hover:border-[#ee0033] duration-300 w-9 h-9 rounded-full"
                onClick={handleNextClick}
            >
                <img className="h-7 w-7" src={NextIcon} alt="Next button" />
            </button>
        </div>
    );
}
