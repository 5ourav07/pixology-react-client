import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Comment = () => {
    const { _id, title } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const img = user?.photoURL || 'unregistered';
        const name = user?.displayName || 'unregistered';
        const email = user?.email || 'unregistered';
        const comment = form.comment.value;

        const review = {
            serviceID: _id,
            serviceName: title,
            reviewerImage: img,
            reviewerName: name,
            reviewerEmail: email,
            comment: comment
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Comment Successful')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }

    return (
        <Form onSubmit={handlePlaceReview}>
            <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
                <>
                    {
                        user?.photoURL
                            ?
                            <Image style={{ height: '30px' }} src={user?.photoURL} roundedCircle></Image>
                            :
                            <FaUser></FaUser>
                    }
                </>
                <Form.Control className='ms-2' type="name" defaultValue={user?.displayName} placeholder="name" readOnly />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control type="email" defaultValue={user?.email} placeholder="name@example.com" readOnly />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control name='comment' as="textarea" rows={3} placeholder="comment here" required />
            </Form.Group>

            <Button className='w-100' variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Comment;