import { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const { loading } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    useTitle('Services');

    useEffect(() => {
        fetch('https://pixology-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

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