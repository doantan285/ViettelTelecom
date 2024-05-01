import React from 'react';

import BannerImg from '~/assets/images/banner-static.png';
import LinkNav from '~/base-components/LinkNav';

export default function Banner() {
    return (
        <div>
            <img className='w-full' src={BannerImg} alt="banner" />
            <div>
                <LinkNav href={"/"} children={"Trang chủ"}/>
                
            </div>
        </div>
    );
}
