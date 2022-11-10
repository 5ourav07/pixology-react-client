import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const MyReviewTable = ({ r, handleDelete }) => {
    const { _id, serviceName, reviewerImage, reviewerName, reviewerEmail, comment } = r;

    return (
        <tr>
            <td>{serviceName}</td>
            <td>{reviewerName}</td>
            <td>
                <img style={{ height: '60px' }} src={reviewerImage} alt="" />
            </td>
            <td>{reviewerEmail}</td>
            <td>
                <Form.Group>
                    <Form.Control defaultValue={comment} name='comment' as="textarea" rows={3} placeholder="comment here" required />
                </Form.Group>
            </td>
            <td>
                <Button onClick={() => handleDelete(_id)} variant='dark' className='me-2'>Delete</Button>
                <Button variant='dark'>Edit</Button>
            </td>
        </tr>
    );
};

export default MyReviewTable;