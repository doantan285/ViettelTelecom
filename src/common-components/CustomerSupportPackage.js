import React from 'react';
import LinkNav from '~/base-components/LinkNav';

export default function CustomerSupportPackage({ img, title }) {
    return (
        <div className="group h-[396px] w-[261px] border flex flex-col rounded-xl rounded-bl-none hover:border-[#ee0033]">
            <img className="group-hover:scale-105 duration-300 w-full h-[308px]" src={img} alt="" />
            <p className="flex flex-1 justify-center items-center text-2xl font-semibold text-slate-700">
                <LinkNav href={'/'} children={title} />
            </p>
        </div>
    );
}
