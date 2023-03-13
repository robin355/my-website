import React from 'react';
import './Banner.css'
import background from '../../../../src/Assets/videos/example.mp4'
const Banner = () => {
    return (
        <div className='main'>
            <video src={background} autoPlay muted></video>
            <div className='content lg:pl-[100px]'>
                <h2 className='text-4xl'>We shape the art of <br />
                    technology</h2>
                <button className="btn btn-outline btn-accent mt-4 text-white">Know More</button>
            </div>
        </div>

    );
};

export default Banner;