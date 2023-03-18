import React from 'react';
import Features from './Features';
import MobileDevBanner from './MobileDevBanner';
import Mtechnology from './Mtechnology';

const MobileDev = () => {
    return (
        <div>
            <MobileDevBanner></MobileDevBanner>
            <Features></Features>
            <Mtechnology></Mtechnology>
        </div>
    );
};

export default MobileDev;