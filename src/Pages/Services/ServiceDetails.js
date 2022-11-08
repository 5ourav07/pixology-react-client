import React from 'react';
import Card from 'react-bootstrap/Card';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { title, img, price, description } = useLoaderData();

    return (
        <div className='container mb-4'>
            <h1 className='text-center'>Service Details</h1>

            <Card>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className='text-justify'>{description}</Card.Text>
                    <Card.Text className='text-danger fw-bolder'>Price: ${price}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;