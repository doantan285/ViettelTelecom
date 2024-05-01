import React from 'react';
import ButtonComponent from './ButtonComponent';

export default function IncentiveInfo() {
    return (
        <div className="w-[363px] h-[440px] flex flex-col gap-5">
            <div className="uppercase font-semibold text-[28px] text-slate-700">viettel++</div>
            <div className="text-sm">
                <p className="mb-7">
                    Chương trình CSKH lớn nhất dành tặng Khách hàng sử dụng dịch vụ viễn thông
                    Viettel với những đặc quyền vượt trội:
                </p>
                <ul className="flex flex-col gap-7">
                    <li>&emsp;&emsp;- Tích điểm trên mọi tương tác của Khách hàng.</li>
                    <li>
                        &emsp;&emsp;- Cộng hưởng điểm trên các tất cả các dịch vụ Khách hàng đang sử
                        dụng để nâng hạng hội viên nhanh nhất.
                    </li>
                    <li>
                        &emsp;&emsp;- Trải nghiệm tuyệt vời cùng hàng ngàn ưu đãi đặc biệt trong các
                        lĩnh vực mua sắm, tiêu dùng, du lịch, khách sạn…
                    </li>
                </ul>
            </div>
            <ButtonComponent
                className={'w-[140px] h-[38px] bg-[#ee0033] text-white'}
                children={'Tham gia ngay'}
            />
        </div>
    );
}
