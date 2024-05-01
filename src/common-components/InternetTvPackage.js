import React from 'react';
import CheckIcon from '~/assets/icons/check-circled.svg';
import LinkNav from '~/base-components/LinkNav';

export default function InternetTvPackage({
    name,
    price,
    quality,
    content1,
    content2,
}) {
    return (
        <div href="/">
            <div className="w-[262.5px] h-[366px] border bg-white rounded-xl overflow-hidden">
                <div className="h-[120px] bg-[#ee0033] text-white font-bold text-4xl flex justify-center items-center">
                    {name}
                </div>
                <div className="px-[15px] pb-[30px] flex flex-col items-center">
                    <div className="text-2xl font-bold mb-6">{price}</div>
                    <div className="text-2xl font-bold line-clamp-1">{quality}</div>
                    <div className="flex items-start gap-1">
                        <img src={CheckIcon} alt="" />
                        <p className="line-clamp-2">{content1}</p>
                    </div>
                    <div className="flex items-start gap-1">
                        <img src={CheckIcon} alt="" />
                        <p className="line-clamp-2">{content2}</p>
                    </div>
                    <LinkNav
                        href={'/'}
                        children={'Xem chi tiết'}
                        className={
                            'text-[#ee0033] font-semibold hover:border-b-2 h-[21px] hover:border-[#ee0033]'
                        }
                    />
                </div>
            </div>
        </div>
    );
}
