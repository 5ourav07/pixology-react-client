import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className='text-center mt-5 mb-5'>
        <h1>Page Not Found!</h1>
        <Link to="/" className='text-danger fw-bolder'>
            <u>Home</u>
        </Link>
    </div>
);

export default NotFound;