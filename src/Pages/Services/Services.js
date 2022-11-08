import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container mb-4'>
            <h1 className='text-center'>My Services</h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3 gy-3 mt-0'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
}

export default Services;