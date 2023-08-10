import React from 'react'
const Experience = () => {
    return (
        <div>

            <div className='grid gap-6 lg:grid-cols-4  justify-items-center md:grid-cols-2 grid-cols-1 mt-[80px] lg:pl-10'>
                <div>
                    <img  src='https://mediusware.com/assets/image/c-1.svg' alt="" />
                    <span className='text-xl text-blue-600'>7+</span>
                    <p>Years of Experience</p>
                </div>
                <div>
                    <img src='https://mediusware.com/assets/image/c-2.svg' alt="" />
                    <span className='text-xl text-blue-600'>20+</span>
                    <p >Countries Served</p>
                </div>
                <div className=''>
                    <img src='https://mediusware.com/assets/image/c-3.svg' alt="" />
                    <span className='text-xl text-blue-600'>50+</span>
                    <p>IT Professionals</p>
                </div>
                <div>
                    <img  src='https://mediusware.com/assets/image/c-4.svg' alt="" />
                    <span className='text-xl text-blue-600'>700+</span>
                    <p>Projects Completed</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;