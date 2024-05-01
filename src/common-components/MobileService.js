import React from 'react';
import ContentHeader from './ContentHeader';
import MobileServiceContent from './MobileServiceContent';

import ServiceImg1 from '~/assets/images/service1.png';
import ServiceImg2 from '~/assets/images/service2.png';
import ServiceImg3 from '~/assets/images/service3.png';
import ServiceImg4 from '~/assets/images/service4.png';
import ServiceImg5 from '~/assets/images/service5.png';

export default function MobileService() {
    return (
        <div className="flex justify-center w-full mb-10 bg-[#f2f2f2]">
            <div className="w-[1170px] p-[15px] mt-5">
                {/**
                 * ContentHeader: là header mang thông tin của component, thanh điều hướng và đường dẫn đến trang chính của component
                 * Props:
                 * - title: Tiêu đề của component
                 * - navLinks (array): chứa đường link (href) và tên đường link (label) đến other components
                 * - viewAllLink: chứa đường link (href) và tên đường link (children) đến trang chính của component
                 */}
                <ContentHeader
                    title={'dịch vụ di động'}
                    navLinks={[
                        { href: '/', label: 'Gói data' },
                        { href: '/', label: 'Sim số' },
                        { href: '/', label: 'Gói cước' },
                        { href: '/', label: 'Dịch vụ GTGT' },
                        { href: '/', label: 'Dịch vụ quốc thế' },
                    ]}
                    viewAllLink={{ href: '/', children: 'Xem tất cả' }}
                />
                <MobileServiceContent
                    slides={[
                        {
                            id: 1,
                            img: ServiceImg1,
                            name: 'ST5K',
                            price: '10.000đ',
                            content: '500 MB/đến 24h ngày đăng ký',
                            href: '/',
                        },
                        {
                            id: 2,
                            img: ServiceImg2,
                            name: 'ST5K',
                            price: '10.000đ',
                            content: '500 MB/đến 24h ngày đăng ký',
                            href: '/',
                        },
                        {
                            id: 3,
                            img: ServiceImg3,
                            name: 'ST5K',
                            price: '10.000đ',
                            content: '500 MB/đến 24h ngày đăng ký',
                            href: '/',
                        },
                        {
                            id: 4,
                            img: ServiceImg4,
                            name: 'ST5K',
                            price: '10.000đ',
                            content: '500 MB/đến 24h ngày đăng ký',
                            href: '/',
                        },
                        {
                            id: 5,
                            img: ServiceImg5,
                            name: 'ST5K',
                            price: '10.000đ',
                            content: '500 MB/đến 24h ngày đăng ký',
                            href: '/',
                        },
                    ]}
                />
            </div>
        </div>
    );
}
