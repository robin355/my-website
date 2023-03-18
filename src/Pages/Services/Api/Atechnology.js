import React from 'react';

const Atechnology = () => {
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
                            <img className='w-[38px]' src="	https://hr.mediusware.xyz/media/Frame_3.png" alt="" />
                        </div>
                        <div className='flex justify-center items-center border h-[60px] w-[60px] rounded-md'>
                            <img className='w-[38px]' src="	https://hr.mediusware.xyz/media/webpack.png" alt="" />
                        </div>
                        <div className='flex justify-center items-center border h-[60px] w-[60px] rounded-md '>
                            <img className='w-[38px]' src="	https://hr.mediusware.xyz/media/laravel-2.png" alt="" />
                        </div>
                        <div className='flex justify-center items-center border h-[60px] w-[60px] rounded-md '>
                            <img className='w-[38px]' src="https://hr.mediusware.xyz/media/react-2.png" alt="" />
                        </div>
                        <div className='flex justify-center items-center border h-[60px] w-[60px] rounded-md '>
                            <img className='w-[38px]' src="https://hr.mediusware.xyz/media/post.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Atechnology;