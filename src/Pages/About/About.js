import React from 'react';
import AboutBanner from './AboutBanner';
import Growth from './Growth';
import Mission from './Mission';
import Transformation from './Transformation';
import WhoWe from './WhoWe';
import WhyWe from './WhyWe';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <WhoWe></WhoWe>
            <WhyWe></WhyWe>
            <Growth></Growth>
            <Mission></Mission>
            <Transformation></Transformation>
        </div>
    );
};

export default About;