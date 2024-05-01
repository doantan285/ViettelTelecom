import React from 'react';
import CustomerSupportContent from './CustomerSupportContent';
import ContentHeader from './ContentHeader';

export default function CustomerSupport() {
    return (
        <div className="flex justify-center w-full mb-11">
            <div className="w-[1170px] p-[15px] mt-4">
                {/**
                 * ContentHeader: là header mang thông tin của component, thanh điều hướng và đường dẫn đến trang chính của component
                 * Props:
                 * - title: Tiêu đề của component
                 * - navLinks (array): chứa đường link (href) và tên đường link (label) đến other components
                 * - viewAllLink: chứa đường link (href) và tên đường link (children) đến trang chính của component
                 */}
                <ContentHeader title={'Hỗ trợ khách hàng'} />
                <CustomerSupportContent />
            </div>
        </div>
    );
}
