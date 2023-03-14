import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='bg-line mt-[120px] py-[50px]'>
            <h1 className='text-center text-3xl font-medium leading-10'>Services</h1>
            <p className='text-center text-xl '>We Are Offering All Kinds of IT Solutions Services</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:p-[100px] p-3 gap-5'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;