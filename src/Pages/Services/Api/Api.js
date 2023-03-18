import React from 'react';
import Afeaturs from './Afeaturs';
import ApiBanner from './ApiBanner';
import Atechnology from './Atechnology';

const Api = () => {
    return (
        <div>
            <ApiBanner></ApiBanner>
            <Afeaturs></Afeaturs>
            <Atechnology></Atechnology>
        </div>
    );
};

export default Api;