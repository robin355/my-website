import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.saymedia-content.com/.image/t_share/MTc0NDI4Nzg1MTI1MzY5NDc4/10-signs-of-a-healthy-work-environment.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-semibold">We shape the art of <br />
                            technology</h1>
                        <button className="btn btn-primary">Know More</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;