import React from 'react';
import Card from 'react-bootstrap/Card';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData, useParams } from 'react-router-dom';
import Comment from '../Reviews/Comment';
import Review from '../Reviews/Review';

const ServiceDetails = () => {
    const { title, img, price, description } = useLoaderData();
    const { id } = useParams();

    return (
        <div className="container">
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 mb-4'>
                <Card className='p-0'>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img className='w-100 img-fluid' src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>

                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='text-justify'>{description}</Card.Text>
                        <Card.Text className='text-danger fw-bolder'>Price: ${price}</Card.Text>
                    </Card.Body>

                    <Card.Footer>
                        <Comment></Comment>
                    </Card.Footer>
                </Card>

                <Review id={id}></Review>
            </div>
        </div>
    );
};

export default ServiceDetails;