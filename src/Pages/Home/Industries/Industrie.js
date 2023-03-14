import React from 'react';
import './Industrie.css'
const Industrie = ({ data }) => {
    const { name, image } = data
    return (
        <div className='flex flex-col justify-center items-center bg-[#FFFFFF] card mb-[30px] pt-[40px] pb-[40px]'>
            <img src={image} alt="" />
            <h2 className='text-base pt-4'>{name}</h2>
        </div>
    );
};

export default Industrie;