import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, description } = service;

    return (
        <div>
            <CardGroup>
                <Card>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>

                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='text-justify'>
                            {
                                description.length > 100
                                    ?
                                    <>{description.slice(0, 100) + '...'}</>
                                    :
                                    description
                            }
                        </Card.Text>
                        <Card.Text className='text-danger fw-bolder'>Price: ${price}</Card.Text>
                        <Link to={`/services/${_id}`}>
                            <Button className='w-100' variant="dark">Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default ServiceCard;