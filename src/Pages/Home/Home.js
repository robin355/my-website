import React from 'react';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import Industries from './Industries/Industries';
import Join from './JoinTeam/Join';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Experience></Experience>
            <Services></Services>
            <Industries></Industries>
            <Join></Join>
        </div>
    );
};

export default Home;