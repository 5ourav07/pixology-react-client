import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3 gy-4 mt-0'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <Link className='d-flex justify-content-center align-items-center mt-3'>
                <Button variant="primary">See All</Button>
            </Link>
        </div>
    );
}

export default Services;