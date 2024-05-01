import React from 'react';

// Slide
import Slide from '~/base-components/Slide';
import Slide1 from '~/assets/images/slide1.jpg';
import Slide2 from '~/assets/images/slide2.jpg';
import Slide3 from '~/assets/images/slide3.jpg';
import Slide4 from '~/assets/images/slide4.jpg';

import NewsEvent from '~/common-components/NewsEvent';
import MobileService from '~/common-components/MobileService';
import InternetTv from '~/common-components/InternetTv';
import MobileDevice from '~/common-components/MobileDevice';
import Incentive from '~/common-components/Incentive';
import DigitalApplication from '~/common-components/DigitalApplication';
import CustomerSupport from '~/common-components/CustomerSupport';

export default function Home() {
    return (
        <div className='mt-[125px]'>
            <Slide
                slides={[
                    {
                        id: 1,
                        content: Slide1,
                    },
                    {
                        id: 2,
                        content: Slide2,
                    },
                    {
                        id: 3,
                        content: Slide3,
                    },
                    {
                        id: 4,
                        content: Slide4,
                    },
                ]}
            />
            <NewsEvent />
            <MobileService />
            <InternetTv />
            <MobileDevice />
            <Incentive />
            <DigitalApplication />
            <CustomerSupport />
        </div>
    );
}
