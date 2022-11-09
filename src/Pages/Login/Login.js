import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
    }

    return (
        <div className='container d-flex justify-content-center align-items-center pb-4'>
            <form onSubmit={handleLogin} className='w-50'>
                <h2 className='text-center mb-3 fw-bolder'>Sign In</h2>

                <div className="mb-3">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="mb-4">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="mb-3 d-grid">
                    <button type="submit" className="btn btn-dark">
                        Login
                    </button>
                </div>

                <p className="mb-4">
                    Not Have an Account? Please Sign Up <Link to='/signup'>Here</Link>
                </p>
            </form>
        </div >
    );
};

export default Login;