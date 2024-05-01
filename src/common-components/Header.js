import React from 'react';

import Logo from '~/assets/images/Logo';
import LinkNav from '~/base-components/LinkNav';

import GlobalIcon from '~/assets/icons/globe.svg';
import NewsIcon from '~/assets/icons/id-card.svg';
import QualityIcon from '~/assets/icons/sketch-logo.svg';
import ShopIcon from '~/assets/icons/home.svg';
import HeaderSearch from '~/base-components/HeaderSearch';
import ButtonComponent from '~/common-components/ButtonComponent';

export default function Header() {
    return (
        <div className="border border-b shadow-xl fixed z-50 bg-white w-full top-0">
            <div className="flex items-center justify-center h-[49px] bg-[#f2f2f2]">
                <div className="flex justify-between w-[1170px] px-[15px] py-[10px]">
                    <div className="flex items-center gap-20">
                        <Logo />
                        <div className="flex gap-4">
                            <LinkNav
                                href={'/introduction'}
                                className={'h-[17px] text-slate-500'}
                                icon={GlobalIcon}
                                children={'Giới thiệu Viettel'}
                            />
                            <LinkNav
                                href={'/news'}
                                className={'h-[17px] text-slate-500'}
                                icon={NewsIcon}
                                children={'Tin tức sự kiện'}
                            />
                            <LinkNav
                                href={'/service-quality'}
                                className={'h-[17px] text-slate-500'}
                                icon={QualityIcon}
                                children={'Chất lượng dịch vụ'}
                            />
                            <LinkNav
                                href={'/shop'}
                                className={'h-[17px] text-slate-500'}
                                icon={ShopIcon}
                                children={'Viettel shop'}
                            />
                        </div>
                    </div>
                    <HeaderSearch className={'w-[195px] h-[30px] rounded-lg'} />
                </div>
            </div>
            <div className="flex items-center justify-center h-[74px]">
                <div className="flex gap-5 mx-[10px]">
                    <LinkNav
                        href={'/'}
                        className={'text-sm font-medium '}
                        children={'Dịch vụ di động'}
                    />
                    <LinkNav
                        href={'/'}
                        className={'text-sm font-medium'}
                        children={'Internet / Truyền hình'}
                    />
                    <LinkNav
                        href={'/'}
                        className={'text-sm font-medium'}
                        children={'Viettel++'}
                    />
                    <LinkNav
                        href={'/'}
                        className={'text-sm font-medium'}
                        children={'Điện thoại'}
                    />
                    <LinkNav
                        href={'/'}
                        className={'text-sm font-medium'}
                        children={'Dịch vụ doanh nghiệp'}
                    />
                    <LinkNav
                        href={'/'}
                        className={'text-sm font-medium'}
                        children={'Hỗ trợ khách hàng'}
                    />
                    <LinkNav
                        href={'/'}
                        className={'text-sm font-medium'}
                        children={'My Viettel'}
                    />
                </div>
                <div className="flex gap-2 ml-2">
                    <ButtonComponent
                        className={
                            "w-[119px] h-[40px] text-white bg-[#ee0033] font-medium text-sm relative before:content-[''] before:absolute"
                        }
                        children={'Đăng nhập'}
                    />
                    <ButtonComponent
                        className={
                            'w-[119px] h-[40px] border border-slate-500 font-medium text-sm'
                        }
                        children={'Đăng ký'}
                    />
                </div>
            </div>
        </div>
    );
}
