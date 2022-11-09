import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ReviewCard = () => {
    return (
        <Card>
            <Card.Header>
                <div className='d-flex align-items-center'>
                    <Image style={{ height: '30px' }} roundedCircle></Image>
                    <p>Name</p>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Text>Comment</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ReviewCard;