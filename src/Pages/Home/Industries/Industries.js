import React, { useEffect, useState } from 'react';
import Industrie from './Industrie';

const Industries = () => {
    const [datas, setData] = useState([])
    useEffect(() => {
        fetch(`industry.json`)
            .then(res => res.json())
            .then(data => setData(data))

    }, [])
    return (
        <div>
            <p className='text-center text-4xl font-medium leading-10'>Industry we serve</p>
            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 lg:p-[100px] mt-3 gap-4'>
                {
                    datas.map(data => <Industrie key={data.id} data={data}></Industrie>)
                }
            </div>

        </div>
    );
};

export default Industries;