import React from 'react';

const ServiceBanner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://mediusware.com/assets/image/projectHeader.jpg")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-semibold mt-5">Services</h1>
                        <p className="mt-5 mb-5">We Provide this IT solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;