import React from 'react';

import LinkNav from '~/base-components/LinkNav';

export default function DigitalApplicationUtilities({ type, img, title, text, href }) {
    return (
        <div>
            {type === 'lg' && (
                <div className="relative h-[493px] w-[555px] overflow-hidden rounded-xl rounded-bl-none">
                    <img
                        className="h-[305px] w-full hover:scale-105 duration-300"
                        src={img}
                        alt=""
                    />
                    <div className="absolute flex flex-col gap-3 h-[218px] w-full px-5 pt-5 pb-[30px] bg-white bottom-0 rounded-tl-3xl rounded-br-xl border hover:border-[#ee0033] duration-300">
                        <LinkNav
                            className={'font-semibold text-2xl text-slate-700'}
                            href={href}
                            children={title}
                        />
                        <p className="text-sm text-slate-900">
                            {text}
                        </p>
                        <LinkNav
                            className={'text-[#ee0033] font-semibold text-[16px] mt-2'}
                            href={href}
                            children={'Xem chi tiết'}
                        />
                    </div>
                </div>
            )}
            {type === 'sm' && (
                <div className="w-[555px] h-[145px] flex rounded-xl rounded-bl-none overflow-hidden border hover:border-[#ee0033]">
                    <img className="w-[263px] h-full" src={img} alt="" />
                    <div className="bg-white w-[292px] px-5 py-[15px] flex flex-col justify-between">
                        <LinkNav
                            className={'font-semibold text-2xl text-slate-700'}
                            href={href}
                            children={title}
                        />
                        <p className="text-sm text-slate-900 line-clamp-2">
                            {text}
                        </p>
                        <LinkNav
                            className={'text-[#ee0033] font-semibold text-[16px] mt-2'}
                            href={href}
                            children={'Xem chi tiết'}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
