import React from 'react';

const Mission = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-rows-1 justify-center items-center lg:px-[100px] p-3 gap-4 mt-8'>
                <div>
                    <img src="https://mediusware.com/assets/mission-vision.b767b120.png" alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-medium leading-10 mb-[40px]'>Our <span className='text-[#8e98f3]'>Mission </span></h1>
                    <p>Leave a positive footprint by devoting our human resources, technologies and expertise to deliver top-of-the-line digital products, thereby contributing to the success of modern businesses around the globe.</p>
                    <h1 className='text-2xl font-medium leading-10  mt-[40px] mb-[40px]'>Our <span className='text-[#8e98f3]'>Vision </span></h1>
                    <p>Deliver one-of-a-kind digital solutions to facilitate global businesses, powered by innovation and guided by integrity.</p>
                </div>
            </div>
        </div>
    );
};

export default Mission;