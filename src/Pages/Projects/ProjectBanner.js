import React from 'react';

const ProjectBanner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://job.mediusware.com/assets/banner.svg")` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className=" text-4xl font-semibold mt-3">Projects</h1>
                        <p className="text-base mb-5">Let's shape the art of technology, Join our advanced team!</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectBanner;