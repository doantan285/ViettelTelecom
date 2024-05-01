import React from 'react';
import DigitalApplicationUtilities from './DigitalApplicationUtilities';

import DigitalImg1 from '~/assets/images/digital1.jpg';
import DigitalImg2 from '~/assets/images/digital2.png';
import DigitalImg3 from '~/assets/images/digital3.jpg';
import DigitalImg4 from '~/assets/images/digital4.png';

export default function DigitalApplicationContent() {
    return (
        <div className="flex justify-between h-[493px] mt-5">
            {/**
             * DigitalApplicationUtilities: là các thành phần con trong nằm trong content của DigitalApplicationContent
             * Props:
             * - href: đường link đến trang chính của component
             * - type(lg || sm): lg-kích cỡ component lớn (large), sm-kích cỡ component nhỏ (small)
             * - img: Ảnh component
             * - title: Tiêu đề component
             * - text: nội dung component
             */}
            <DigitalApplicationUtilities
                href={'/'}
                type={'lg'}
                img={DigitalImg1}
                title={'My Viettel'}
                text={
                    'Ứng dụng My Viettel tích hợp các tiện ích tuyệt vời nhất cho khách hàng: Tra cứu khuyến mại, kiểm tra thông tin thuê bao, lưu trữ dữ liệu cá nhân, giải trí online, Mua data, tra cước – nạp thẻ, tích điểm Viettel++, ….. Hỗ trợ Đăng ký & Quản lý Wifi, Internet, Truyền hình. ĐẶC BIỆT: Miễn phí Data 3G/4G truy cập ứng dụng.'
                }
            />
            <div className="h-full flex flex-col justify-between">
                <DigitalApplicationUtilities
                    type={'sm'}
                    href={'/'}
                    img={DigitalImg2}
                    title={'TV360'}
                    text={
                        'TV360 là sản phẩm dịch vụ xem Truyền hình Online mọi lúc, mọi nơi. - Gần 200 kênh truyền hình - Kho phim bom tấn'
                    }
                />
                <DigitalApplicationUtilities
                    type={'sm'}
                    href={'/'}
                    img={DigitalImg3}
                    title={'iMuzik'}
                    text={
                        'Dịch vụ Imuzik nhạc chờ là dịch vụ cho phép cài đặt các bản nhạc, ca khúc, âm thanh độc đáo để người gọi đến được thưởng thức âm nhạc trong khi chờ người nghe nhấc máy.'
                    }
                />
                <DigitalApplicationUtilities
                    type={'sm'}
                    href={'/'}
                    img={DigitalImg4}
                    title={'MyClip'}
                    text={
                        'Dịch vụ mạng xã hội MyClip là dịch vụ mạng xã hội Video nơi mà người dùng có thể xem, bình luận, chia sẻ, yêu thích các Video do người dùng trên MyClip upload lên hệ thống. Ngoài ra, khi khách hàng đăng ký thành viên mạng xã hội có thể upload video đính kèm dòng chia sẻ cảm xúc lên MXH MyClip. Chi tiết truy cập http://myclip.vn/'
                    }
                />
            </div>
        </div>
    );
}
