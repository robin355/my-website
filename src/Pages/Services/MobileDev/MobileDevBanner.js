import React from 'react';

const MobileDevBanner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://hr.mediusware.xyz/media/Mobile-App-Solution-Updated-1.jpg")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-semibold mt-5">Mobile App Development</h1>
                        <p className="mt-5"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileDevBanner;