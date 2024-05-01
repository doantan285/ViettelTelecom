import React from 'react';
import DigitalApplicationContent from './DigitalApplicationContent';
import ContentHeader from './ContentHeader';

export default function Application() {
    return (
        <div className="flex justify-center w-full bg-[#f2f2f2]">
            <div className="w-[1170px] p-[15px] mb-7 mt-4">
                {/**
                 * ContentHeader: là header mang thông tin của component, thanh điều hướng và đường dẫn đến trang chính của component
                 * Props:
                 * - title: Tiêu đề của component
                 * - navLinks (array): chứa đường link (href) và tên đường link (label) đến other components
                 * - viewAllLink: chứa đường link (href) và tên đường link (children) đến trang chính của component
                 */}
                <ContentHeader
                    title={'ứng dụng số'}
                    navLinks={[{ href: '/', label: 'Tiện ích - Giải trí' }]}
                    viewAllLink={{ href: '/', children: 'Xem tất cả' }}
                />
                <DigitalApplicationContent />
            </div>
        </div>
    );
}
