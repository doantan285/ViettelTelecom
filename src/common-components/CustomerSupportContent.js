import React from 'react';

import CustomerSupportPackage from './CustomerSupportPackage';

import SupportImg1 from '~/assets/images/support1.png';
import SupportImg2 from '~/assets/images/support2.png';
import SupportImg3 from '~/assets/images/support3.png';
import SupportImg4 from '~/assets/images/support4.png';

export default function CustomerSupportContent() {
    return (
        <div href='/'>
            <div className="flex justify-between mt-6">
                {/**
                * CustomerSupportPackage: chứa nội dung gói hỗ trợ khách hàng
                * props:
                * - img: ảnh gói
                * - title: tên title gói
                 */}
                <CustomerSupportPackage img={SupportImg1} title={'Câu hỏi thường gặp'} />
                <CustomerSupportPackage img={SupportImg2} title={'Tìm kiếm cửa hàng'} />
                <CustomerSupportPackage img={SupportImg3} title={'Phản ánh góp ý'} />
                <CustomerSupportPackage img={SupportImg4} title={'Video hướng dẫn'} />
            </div>
        </div>
    );
}
