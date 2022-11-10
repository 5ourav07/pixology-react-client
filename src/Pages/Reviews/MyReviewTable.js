import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';

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
                {comment}
                {/* <Form.Group>
                    <Form.Control defaultValue={comment} name='comment' as="textarea" rows={3} placeholder="comment here" required />
                </Form.Group> */}
            </td>
            <td>
                <Button onClick={() => handleDelete(_id)} variant='dark' className='me-2'>Delete</Button>
                <Link to={`/review/${_id}`}><Button variant='dark'>Edit</Button></Link>
            </td>
        </tr>
    );
};

export default MyReviewTable;