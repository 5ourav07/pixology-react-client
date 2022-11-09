import Form from 'react-bootstrap/Form';
import { FaUser } from 'react-icons/fa';

const Comment = () => {
    return (
        <Form>
            <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
                <FaUser className='me-2'></FaUser>
                <Form.Control type="name" placeholder="name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    );
}

export default Comment;