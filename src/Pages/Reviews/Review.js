import Form from 'react-bootstrap/Form';
import { FaUser } from 'react-icons/fa';

const Review = () => {
    return (
        <Form className='border'>
            <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
                <FaUser className='me-2'></FaUser>
                <Form.Control type="name" placeholder="name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    );
}

export default Review;