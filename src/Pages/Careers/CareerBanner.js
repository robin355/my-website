import React from 'react';

const CareerBanner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://job.mediusware.com/assets/banner.svg")` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className=" text-4xl font-semibold mt-3">Robin's Jobs</h1>
                        <p className="text-base mt-3">Let's shape the art of technology, Join our advanced team!</p>
                        <p className='text-xl mb-3 mt-3'>For Any Queries Email : <span className='text-[#ffc107]'>career@robin's.com</span></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CareerBanner;