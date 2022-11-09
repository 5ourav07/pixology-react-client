import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center pb-4'>
            <form className='w-50'>
                <h2 className='text-center mb-3 fw-bolder'>Sign Up</h2>

                <div className="mb-3">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter your full name" />
                </div>

                <div className="mb-3">
                    <label>Image Link</label>
                    <input type="text" className="form-control" placeholder="Enter your image link" />
                </div>

                <div className="mb-3">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="mb-4">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter your password" />
                </div>

                <div className="mb-3 d-grid">
                    <button type="submit" className="btn btn-dark">
                        Sign Up
                    </button>
                </div>

                <p className="mb-4">
                    Already Have an Account? Please Login <Link to='/login'>Here</Link>
                </p>

                <h4 className='text-center mb-3 fw-bold border-bottom pb-2'>or</h4>

                <ListGroup className='px-5 mx-5 w-full'>
                    <Button className='mb-2' variant="outline-danger">
                        <FaGoogle></FaGoogle> Login with Google
                    </Button>

                    <Button variant="outline-dark">
                        <FaGithub></FaGithub> Login with Github
                    </Button>
                </ListGroup>
            </form>
        </div >
    );
};

export default SignUp;