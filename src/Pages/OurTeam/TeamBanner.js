import React from 'react';

const TeamBanner = () => {
    return (
        // 
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://mediusware.com/assets/image/team.png")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-4xl font-semibold mt-5">Meet the team</h1>
                        <p className="mb-5">Who Are Behind Those Amazing Creations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamBanner;