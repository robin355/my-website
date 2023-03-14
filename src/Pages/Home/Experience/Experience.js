import React from 'react'
const Experience = () => {
    return (
        <div>

            <div className='grid gap-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mt-[120px] pr-[100px] pl-[100px]'>
                <div className='text-center'>
                    <img className=' ml-[100px]' src='https://mediusware.com/assets/image/c-1.svg' alt="" />
                    <span className='text-xl text-blue-600'>7+</span>
                    <p className=''>Years of Experience</p>
                </div>
                <div className='text-center'>
                    <img className=' ml-[100px]' src='https://mediusware.com/assets/image/c-2.svg' alt="" />
                    <span className='text-xl text-blue-600'>20+</span>
                    <p className=''>Countries Served</p>
                </div>
                <div className='text-center'>
                    <img className=' ml-[100px]' src='https://mediusware.com/assets/image/c-3.svg' alt="" />
                    <span className='text-xl text-blue-600'>50+</span>
                    <p className=''>IT Professionals</p>
                </div>
                <div className='text-center'>
                    <img className=' ml-[100px]' src='https://mediusware.com/assets/image/c-4.svg' alt="" />
                    <span className='text-xl text-blue-600'>700+</span>
                    <p className=''>Projects Completed</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;