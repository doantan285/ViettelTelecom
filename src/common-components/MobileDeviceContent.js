import React, { useState } from 'react';

import PrevIcon from '~/assets/icons/chevron-left.svg';
import NextIcon from '~/assets/icons/chevron-right.svg';

import MobileDeviceProduct from './MobileDeviceProduct';

export default function BodyMobileContent({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
    };
    return (
        <div className="relative mt-14">
            <button
                className="absolute z-10 left-[-100px] top-1/2 transform -translate-y-1/2 flex justify-center items-center border bg-white hover:border-[#ee0033] duration-300 w-11 h-11 rounded-full"
                onClick={handlePrevClick}
            >
                <img src={PrevIcon} alt="Previous button" />
            </button>
            <div className="flex justify-between">
                {[0, 1, 2].map((offset) => {
                    const index = (currentIndex + offset) % slides.length;
                    return (
                        /**
                        * MobileDeviceProduct: chứa thông tin sản phẩm, thiết bị được bán
                        * props:
                        * - img: ảnh sản phẩm
                        * - name: tên sản phẩm
                        * - price: giá tiền
                        * - className
                         */
                        <MobileDeviceProduct
                            key={slides[index].id}
                            className="transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${offset * (360 + 30)}px)` }}
                            img={slides[index].image}
                            name={slides[index].name}
                            price={slides[index].price}
                        />
                    );
                })}
            </div>
            <button
                className="absolute z-10 right-[-100px] top-1/2 transform -translate-y-1/2 flex justify-center items-center border bg-white hover:border-[#ee0033] duration-300 w-11 h-11 rounded-full"
                onClick={handleNextClick}
            >
                <img src={NextIcon} alt="Next button" />
            </button>
        </div>
    );
}
