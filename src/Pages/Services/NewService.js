import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useTitle from '../../Hooks/useTitle';

const NewService = () => {
    const [service, setService] = useState({});
    useTitle('New Service');

    const handleAddService = event => {
        event.preventDefault();
        console.log(service);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Service Added Successfully');
                    event.target.reset();
                }
            })
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service }
        newService[field] = value;
        setService(newService);
    }

    return (
        <div className='container mb-3'>
            <h1 className="text-center mb-3">Create a New Service</h1>
            <Form onSubmit={handleAddService}>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onBlur={handleInputBlur} name='title' placeholder="Title" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control onBlur={handleInputBlur} name='img' placeholder="Image Link" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onBlur={handleInputBlur} name='price' placeholder="Price" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onBlur={handleInputBlur} name='description' placeholder="Description" required />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default NewService;