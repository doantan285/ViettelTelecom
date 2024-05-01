import React from 'react';
import InternetTvPackage from './InternetTvPackage';

export default function InternetTvContent() {
    return (
        <div className='flex justify-between mt-6'>
            {/**
            * InternetTvPackage: chứa nội dung gói thê internet-truyền hình
            * props:
            * - name: tên gói
            * - price: giá
            * - quality: chất lượng mạng của gói
            * - content1: giới thiệu gói
            * - content2: giới thiệu gói
             */}
            <InternetTvPackage
                name={'HOMET'}
                price={'165.000đ/tháng'}
                quality={'100Mbps'}
                content1={'Áp dụng tại 61 tỉnh (trừ HNI và HCM).'}
                content2={'Phù hợp với cá nhân, hộ gia đình có nhu cầu kết nối mạng cho mục đích riêng tư.'}
            />
            <InternetTvPackage
                name={'SUN1T'}
                price={'165.000đ/tháng'}
                quality={'100Mbps'}
                content1={'Áp dụng tại 61 tỉnh (trừ HNI và HCM).'}
                content2={'Phù hợp với cá nhân, hộ gia đình có nhu cầu kết nối mạng cho mục đích riêng tư.'}
            />
            <InternetTvPackage
                name={'SUN2T'}
                price={'165.000đ/tháng'}
                quality={'100Mbps'}
                content1={'Áp dụng tại 61 tỉnh (trừ HNI và HCM).'}
                content2={'Phù hợp với cá nhân, hộ gia đình có nhu cầu kết nối mạng cho mục đích riêng tư.'}
            />
            <InternetTvPackage
                name={'STAR1H'}
                price={'165.000đ/tháng'}
                quality={'100Mbps'}
                content1={'Áp dụng tại 61 tỉnh (trừ HNI và HCM).'}
                content2={'Phù hợp với cá nhân, hộ gia đình có nhu cầu kết nối mạng cho mục đích riêng tư.'}
            />
        </div>
    );
}
