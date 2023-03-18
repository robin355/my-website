import React from 'react';
import Sfeaturs from './Sfeaturs';
import SoftwareDevBanner from './SoftwareDevBanner';
import Stechnology from './Stechnology';

const SoftwareDev = () => {
    return (
        <div>
            <SoftwareDevBanner></SoftwareDevBanner>
            <Sfeaturs></Sfeaturs>
            <Stechnology></Stechnology>
        </div>
    );
};

export default SoftwareDev;