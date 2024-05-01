import React from 'react';

import NewsEventPackage from './NewsEventPackage';

import NewsImage1 from '~/assets/images/news1.jpg';
import NewsImage2 from '~/assets/images/news2.jpg';
import NewsImage3 from '~/assets/images/news3.jpg';

export default function NewsEventContent() {
    return (
        <div className="flex gap-7 my-6">
            <div className="w-[743px]">
                {/**
                * NewsPackage: component tin tức
                * props:
                * - href: link đến trang tin tức
                * - img: Ảnh tin tức
                * - title: Tiêu đề tin
                * - date: ngày đăng tin
                * - className
                 */}
                <NewsEventPackage
                    href='/'
                    image={NewsImage1}
                    title={'Mua gói Truyền hình TV360 giá hời nhất, Chỉ có tại MoMo!'}
                    date={'Thứ sáu, 19/01/2024'}
                    className={'text-2xl'}
                />
            </div>
            <div className="w-[368px]">
                <NewsEventPackage
                    href='/'
                    image={NewsImage2}
                    title={'Viettel giảm giá Data Roaming tới 03 lần tại nhiều quốc gia lớn'}
                    date={'Thứ năm, 18/01/2024'}
                    className={'text-lg'}
                />
                <NewsEventPackage
                    href='/'
                    image={NewsImage3}
                    title={'Du xuân năm châu - đâu cũng có quà từ Viettel Roaming'}
                    date={'Thứ hai, 15/01/2024'}
                    className={'text-lg'}
                />
            </div>
        </div>
    );
}
