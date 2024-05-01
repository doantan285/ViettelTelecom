import React from 'react';

import LinkNav from '~/base-components/LinkNav';
import ButtonComponent from './ButtonComponent';
import PriceIcon from '~/assets/icons/stitches-logo.svg';

export default function MobileServicePackage({
    img,
    name,
    price,
    content,
    href,
    className,
}) {
    return (
        <div className={`h-[494px] w-[392px] flex flex-col items-center relative ${className}`}>
            <img className="w-[362px]" src={img} alt="" />
            <div className="absolute bg-white h-[164px] bottom-0 w-[360px] pt-[15px] px-[20px] pb-[30px] rounded-tl-[44px] rounded-br-xl">
                <div className="flex justify-between">
                    <div className="font-semibold text-[26px] text-gray-600">{name}</div>
                    <div className="flex items-center gap-1">
                        <img className="w-5 h-5" src={PriceIcon} alt="" />
                        <span className="font-semibold text-xl text-gray-600">{price}</span>
                    </div>
                </div>
                <div>{content}</div>
                <div className="flex justify-between pt-5 items-center">
                    <LinkNav
                        href={href}
                        children={'Xem chi tiết'}
                        className={'text-[#ee0033] font-semibold text-lg'}
                    />
                    <ButtonComponent
                        className={
                            'bg-[#ee0033] w-[107px] h-[38px] text-white text-base font-semibold'
                        }
                        children={'Đăng ký'}
                    />
                </div>
            </div>
        </div>
    );
}
