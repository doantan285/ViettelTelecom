import React from 'react';
import MobileDeviceContent from './MobileDeviceContent';
import ContentHeader from './ContentHeader';

import MobileImg1 from '~/assets/images/mobile1.png';
import MobileImg2 from '~/assets/images/mobile2.jpg';
import MobileImg3 from '~/assets/images/mobile3.jpg';
import MobileImg4 from '~/assets/images/mobile4.jpg';

export default function MobileDevice() {
    return (
        <div className="flex justify-center w-full mb-16">
            <div className="w-[1170px] p-[15px]">
                {/**
                 * ContentHeader: là header mang thông tin của component, thanh điều hướng và đường dẫn đến trang chính của component
                 * Props:
                 * - title: Tiêu đề của component
                 * - navLinks (array): chứa đường link (href) và tên đường link (label) đến other components
                 * - viewAllLink: chứa đường link (href) và tên đường link (children) đến trang chính của component
                 */}
                <ContentHeader
                    title={'điện thoại - thiết bị'}
                    viewAllLink={{ href: '/', children: 'Xem tất cả' }}
                />
                {/**
                 * slides: array contains json (id, img, name, price)
                 */}
                <MobileDeviceContent
                    slides={[
                        {
                            id: 1,
                            image: MobileImg1,
                            name: 'V6421',
                            price: '450.000',
                        },
                        {
                            id: 2,
                            image: MobileImg2,
                            name: 'V6420',
                            price: '390.000',
                        },
                        {
                            id: 3,
                            image: MobileImg3,
                            name: 'V6216 (4G)',
                            price: '790.000',
                        },
                        {
                            id: 4,
                            image: MobileImg4,
                            name: 'V6504',
                            price: '790.000',
                        },
                    ]}
                />
            </div>
        </div>
    );
}
