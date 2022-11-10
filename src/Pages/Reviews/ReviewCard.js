import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ReviewCard = ({ r }) => {
    const { serviceName, reviewerImage, reviewerName, reviewerEmail, comment } = r;

    return (
        <Card className='mb-3'>
            <Card.Header>
                <div className=''>
                    <Image src={reviewerImage} style={{ height: '30px' }} roundedCircle></Image>
                    <div>
                        <p>{reviewerEmail}</p>
                        <p>{reviewerName}</p>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Text>{serviceName}</Card.Text>
                <Card.Text>{comment}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ReviewCard;