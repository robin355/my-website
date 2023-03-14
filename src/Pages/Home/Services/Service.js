import React from 'react';
import '../Services/Service.css'
import { FiArrowRight } from 'react-icons/fi';
const Service = ({ service }) => {
    const { name, image, description } = service
    return (
        <div className=' shadow-lg rounded bg-[#ffffff] text-center flex flex-col justify-center items-center p-5 '>
            <img className='object-none object-center' src={image} alt="" />
            <h1 className='text-xl my-5 font-medium leading-10'>{name}</h1>
            <p className='text-sm font-normal'>{description}</p>
            <div className='flex justify-center items-center gap-1 mt-4'>
                <div>
                    <button className='text-[#0060af] text-sm'>Read Mores</button>
                </div>
                <div>
                    <span className='text-[#0060af]'><FiArrowRight /></span>
                </div>
            </div>
        </div>
    );
};

export default Service;