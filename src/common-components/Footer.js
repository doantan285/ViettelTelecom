import React from 'react';
import FooterInfo from './FooterInfo';
import FooterNav from './FooterNav';

export default function Footer() {
    return (
        <div className="flex gap-7 h-[488px] bg-[#f2f2f2] justify-center">
            <FooterInfo />
            <FooterNav
                href={'/'}
                title={'Sản phẩm dịch vụ'}
                contents={[
                    'Dịch vụ Di động',
                    'Internet - truyền hình',
                    'Điện thoại - thiết bị thông minh',
                    'Dịch vụ quốc tế',
                    'Dịch vụ KH SME',
                    'Ứng dụng số',
                ]}
            />
            <FooterNav
                href={'/'}
                title={'Tiện ích My Viettel'}
                contents={[
                    'Quản lý thông tin tài khoản',
                    'Chuyển sàn trả sau',
                    'Chính sách giải quyết khiếu nại',
                    'Đổi sim',
                    'Lan tỏa dịch vụ',
                    'Quy trình mua bán',
                    'Tìm kiếm cửa hàng',
                    'Chuẩn hóa thông tin',
                    'Tra cứu Nghị định 49',
                    'Chính sách đổi trả',
                    'Đơn hàng của bạn',
                ]}
            />
            <div>
                <FooterNav
                    href={'/'}
                    title={'Tiện ích thanh toán'}
                    contents={['Thanh toán / Nạp tiền', 'Nạp thẻ cào', 'Tra cứu hóa đơn điện tử']}
                />
                <FooterNav
                    href={'/'}
                    title={'Viettel++'}
                    contents={['Giới thiệu Viettel++', 'Thông tin hội viên', 'Ưu đãi chương trình']}
                />
            </div>

            <FooterNav
                href={'/'}
                title={'Điều khoản & Điều kiện sử dụng'}
                contents={[
                    'Quản Lý Chất lượng Dịch vụ',
                    'Quy chế hoạt động TMĐT',
                    'Quy trình mua bán',
                    'Chính sách vận chuyển',
                    'Chính sách thanh toán',
                    'Chính sách đổi trả',
                    'Chính sách bảo mật',
                    'Chính sách giải quyết khiếu nại',
                    'Lan tỏa thanh toán cước',
                    'Lan tỏa cố định',
                    'Lan tỏa di dộng',
                ]}
            />
        </div>
    );
}
