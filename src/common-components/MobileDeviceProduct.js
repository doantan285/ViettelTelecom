import React from 'react';

export default function MobileDeviceProduct({ img, name, price, className }) {
    return (
        <div
            className={`w-[360px] h-[336px] px-[30px] py-[25px] border border-slate-400 rounded-xl rounded-bl-none ${className}`}
        >
            <div className="flex justify-center">
                <img className="h-[198px] w-[198px]" src={img} alt="" />
            </div>
            <div className="text-2xl text-slate-600">{name}</div>
            <span className="font-bold text-slate-700 text-3xl">{price}đ</span>
        </div>
    );
}
