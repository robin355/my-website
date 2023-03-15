import React from 'react';
import Address from './Address/Address';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import Industries from './Industries/Industries';
import Join from './JoinTeam/Join';
import Services from './Services/Services';
import Technology from './Technology/Technology';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Experience></Experience>
            <Services></Services>
            <Technology></Technology>
            <Industries></Industries>
            <Join></Join>
            <Address></Address>
        </div>
    );
};

export default Home;