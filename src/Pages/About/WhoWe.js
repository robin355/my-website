import React from 'react';

const WhoWe = () => {
    return (
        <div>
            <div className='grid mt-10 lg:grid-cols-2 md:grid-cols-2 grid-rows-1 justify-center items-center lg:p-[100px] p-3 gap-4'>
                <div>
                    <h1 className='text-2xl font-medium leading-10 mb-[40px]'>Who <span className='text-[#8e98f3]'>We </span> Are</h1>
                    <p>Incepted in 2015, Robin's Ltd. has been serving as a leading IT Solution provider in Bangladesh. Our aim is to help businesses all around the world by providing the digital solutions according to their need. Serving a number of renowned companies from the USA, UK, and many other countries, we have already created a wide range of satisfied clients!</p>

                </div>
                <div>
                    <img src="https://mediusware.com/assets/about1.2322110a.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhoWe;