import React from 'react';

const AboutBanner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://itartificer.com/wp-content/uploads/2019/08/1728838a-9079-4956-b2cb-fb8549115b5f.jpg")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-4xl font-semibold mt-5">About</h1>
                        <p className="mb-5">IT Solution provider in Bangladesh</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutBanner;