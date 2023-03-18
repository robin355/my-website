import React from 'react';

const Mtechnology = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 bg-line lg:p-[100px] p-2 lg:mt-[120px]'>
                <div>
                    <h1 className='text-4xl leading-10 font-medium mb-[40px]'>Technology Stack</h1>
                    <p>If you are looking for the most proven technologies, we have got you covered. We use more than 100+ latest technologies that are timely and useful for your business.</p>
                </div>
                <div>
                    <div className='flex flex-wrap gap-4 justify-center lg:h-[100px] items-center'>
                        <div className='flex justify-center items-center border h-[60px] w-[60px] rounded-md '>
                            <img className='w-[38px]' src="https://hr.mediusware.xyz/media/react-2.png" alt="" />
                        </div>

                        <div className='flex justify-center items-center border h-[60px] w-[60px] rounded-md '>
                            <img className='w-[38px]' src="https://hr.mediusware.xyz/media/Swift-2-512.webp" alt="" />
                        </div>
                        <div className='flex justify-center items-center border h-[60px] w-[60px] rounded-md '>
                            <img className='w-[38px]' src="https://hr.mediusware.xyz/media/flutter.png" alt="" />
                        </div>
                        <div className='flex justify-center items-center border h-[60px] w-[60px] rounded-md '>
                            <img className='w-[38px]' src="https://hr.mediusware.xyz/media/android-studio.png" alt="" />
                        </div>
                        <div className='flex justify-center items-center border h-[60px] w-[60px] rounded-md '>
                            <img src="https://hr.mediusware.xyz/media/expo-logo-01BB2BCFC3-seeklogo.com.png" alt="" />
                        </div>

                        <div className='flex justify-center items-center border h-[60px] w-[60px] rounded-md '>
                            <img src="https://hr.mediusware.xyz/media/Typescript_logo_2020.svg.png" alt="" />
                        </div>
                        <div className='flex justify-center items-center border h-[60px] w-[60px] rounded-md '>
                            <img className='w-[38px]' src="https://hr.mediusware.xyz/media/5848309bcef1014c0b5e4a9a_1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mtechnology;