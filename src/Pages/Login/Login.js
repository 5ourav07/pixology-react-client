import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signup, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signup(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className='container d-flex justify-content-center align-items-center pb-4'>
            <form onSubmit={handleLogin} className='w-50'>
                <h2 className='text-center mb-3 fw-bolder'>Sign In</h2>

                <div className="mb-3">
                    <label>Email address</label>
                    <input type="email" name='email' className="form-control" placeholder="Enter email" required />
                </div>

                <div className="mb-4">
                    <label>Password</label>
                    <input type="password" name='password' className="form-control" placeholder="Enter password" required />
                </div>

                <div className="mb-3 d-grid">
                    <button type="submit" className="btn btn-dark">
                        Login
                    </button>
                </div>

                <p className="mb-4">
                    Not Have an Account? Please Sign Up <Link to='/signup'>Here</Link>
                </p>

                <Form.Text className="text-danger">{error}</Form.Text>
            </form>
        </div >
    );
};

export default Login;