import React from 'react';

const ApiBanner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://hr.mediusware.xyz/media/API.png")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-semibold mt-5">API Integration</h1>
                        <p className="mt-5"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApiBanner;