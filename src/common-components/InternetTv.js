import React from 'react';
import InternetTvContent from './InternetTvContent';
import ContentHeader from './ContentHeader';

export default function InternetTv() {
    return (
        <div className="flex justify-center w-full bg-[#f2f2f2] mb-3">
            <div className="w-[1170px] p-[15px] mb-12 mt-5">
                {/**
                 * ContentHeader: là header mang thông tin của component, thanh điều hướng và đường dẫn đến trang chính của component
                 * Props:
                 * - title: Tiêu đề của component
                 * - navLinks (array): chứa đường link (href) và tên đường link (label) đến other components
                 * - viewAllLink: chứa đường link (href) và tên đường link (children) đến trang chính của component
                 */}
                <ContentHeader
                    title={'internet - truyền hình'}
                    navLinks={[
                        { href: '/', label: 'Internet' },
                        { href: '/', label: 'Truyền hình' },
                        { href: '/', label: 'Combo Internet-Truyền hình' },
                    ]}
                    viewAllLink={{ href: '/', children: 'Xem tất cả' }}
                />
                <InternetTvContent />
            </div>
        </div>
    );
}
