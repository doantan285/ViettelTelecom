import React from 'react';
import Logo from '~/assets/images/Logo';

export default function FooterInfo() {
    return (
        <div className="w-[300px] h-full flex flex-col justify-around py-4">
            <Logo />
            <div>
                <strong className="text-xs">
                    WEBSITE MUA SẮM ONLINE CHÍNH THỨC CỦA VIETTEL TELECOM.
                </strong>
            </div>
            <div>
                <strong className="text-xs">
                    Cơ quan chủ quản: Tổng Công ty Viễn thông Viettel (Viettel Telecom) - Chi nhánh
                    Tập đoàn Công nghiệp - Viễn thông Quân đội. Mã số doanh nghiệp: 0100109106-011
                    do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp lần đầu ngày 18/07/2005, sửa đổi
                    lần thứ 15 ngày 18/12/2018. Chịu trách nhiệm nội dung: Ông Cao Anh Sơn
                </strong>
            </div>
            <div className="flex">
                <div className="flex gap-1 mr-2 items-center">
                    <img
                        src="https://media.vietteltelecom.vn/upload/ckfinder/files/facebook_footer.png"
                        alt=""
                        className='w-6 h-6 transition ease-in-out hover:scale-110 duration-400'
                    />
                    <img
                        src="https://media.vietteltelecom.vn/upload/ckfinder/files/youtube_footer.png"
                        alt=""
                        className='w-6 h-6 transition ease-in-out hover:scale-110 duration-400'
                    />
                    <img
                        src="https://media.vietteltelecom.vn/upload/ckfinder/files/zalo_footer.png"
                        alt=""
                        className='w-6 h-6 transition ease-in-out hover:scale-110 duration-400'
                    />
                </div>
                <div className='text-xs leading-7'>&copy; Viettel Telecom 2015. All right reserved.</div>
            </div>
            <div className='flex'>
                <img src="https://vietteltelecom.vn/images_content/cttdt-bqp.png" alt="" />
                <img src="https://vietteltelecom.vn/images_content/dvc-bqp.png" alt="" />
                <img src="https://vietteltelecom.vn/images_content/bocongthuong.png" alt="" />
            </div>
        </div>
    );
}
