import React from 'react';
import NewsEventContent from './NewsEventContent';
import ContentHeader from './ContentHeader';

export default function BodyNews() {
    return (
        <div className="flex justify-center w-full mt-12">
            <div className="w-[1170px] p-[15px]">
                {/**
                 * ContentHeader: là header mang thông tin của component, thanh điều hướng và đường dẫn đến trang chính của component
                 * Props:
                 * - title: Tiêu đề của component
                 * - navLinks (array): chứa đường link (href) và tên đường link (label) đến other components
                 * - viewAllLink: chứa đường link (href) và tên đường link (children) đến trang chính của component
                 */}
                <ContentHeader
                    title={'Tin tức sự kiện'}
                    navLinks={[
                        { href: '/', label: 'Tất cả' },
                        { href: '/', label: 'Tin Dịch vụ' },
                        { href: '/', label: 'Tin khuyến mại' },
                        { href: '/', label: 'Tin Dịch vụ Doanh nghiệp' },
                        { href: '/', label: 'Tin My Viettel' },
                    ]}
                    viewAllLink={{ href: '/', children: 'Xem tất cả' }}
                />
                <NewsEventContent />
            </div>
        </div>
    );
}
