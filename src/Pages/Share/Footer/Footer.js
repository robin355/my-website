import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer justify-center lg:justify-around items-center p-4 bg-[#ffffff] text-[#464646]">
                <div>
                    <p>©Robins.2023 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link to='/home' className='hover:underline hover:text-[#0d6efd]'>Home</Link>
                    <Link to='/about' className='hover:underline hover:text-[#0d6efd]'>About</Link>
                    <Link to='/service' className='hover:underline hover:text-[#0d6efd]'>Services</Link>
                    <Link to='/contact' className='hover:underline hover:text-[#0d6efd]'>Contract</Link>

                </div>
            </footer>
        </div>
    );
};

export default Footer;