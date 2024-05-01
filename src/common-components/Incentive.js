import React from 'react';

import IncentiveInfo from './IncentiveInfo';
import IncentiveProgram from './IncentiveProgram';

import IncentiveImg1 from '~/assets/images/incentive1.jpg';
import IncentiveImg2 from '~/assets/images/incentive2.jpg';

export default function Incentive() {
    return (
        <div className="flex justify-center w-full mb-6">
            <div className="w-[1170px] p-[15px] flex justify-between">
                <IncentiveInfo />

                {/**
                 * IncentiveProgram:
                 * props:
                 * - img: ảnh component
                 * - text: label của component
                 */}
                <IncentiveProgram
                    image={IncentiveImg1}
                    text={'Tích điểm trên mọi tương tác của khách hàng'}
                />
                <IncentiveProgram
                    image={IncentiveImg2}
                    text={'Trải nghiệm tuyệt vời cùng hàng ngàn ưu đãi đặc biệt.'}
                />
            </div>
        </div>
    );
}
