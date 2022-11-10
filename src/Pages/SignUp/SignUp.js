import React, { useContext, useState } from 'react';
import { Button, ListGroup, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {
    useTitle('Sign Up');

    const { googleSignup } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignup(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const [error, setError] = useState('');
    const { login, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/login');
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className='container d-flex justify-content-center align-items-center pb-4'>
            <form onSubmit={handleSignUp} className='w-50'>
                <h2 className='text-center mb-3 fw-bolder'>Sign Up</h2>

                <div className="mb-3">
                    <label>Full Name</label>
                    <input type="text" name='name' className="form-control" placeholder="Enter your full name" required />
                </div>

                <div className="mb-3">
                    <label>Image Link</label>
                    <input type="text" name='photoURL' className="form-control" placeholder="Enter your image link" required />
                </div>

                <div className="mb-3">
                    <label>Email address</label>
                    <input type="email" name='email' className="form-control" placeholder="Enter your email" required />
                </div>

                <div className="mb-4">
                    <label>Password</label>
                    <input type="password" name='password' className="form-control" placeholder="Enter your password" required />
                </div>

                <div className="mb-3 d-grid">
                    <button type="submit" className="btn btn-dark">
                        Sign Up
                    </button>
                </div>

                <p className="mb-4">
                    Already Have an Account? Please Login <Link to='/login'>Here</Link>
                </p>

                <Form.Text className="text-danger">{error}</Form.Text>

                <h4 className='text-center mb-3 fw-bold border-bottom pb-2'>or</h4>

                <ListGroup className='px-5 mx-5 w-full'>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-danger">
                        <FaGoogle></FaGoogle> Login with Google
                    </Button>
                </ListGroup>
            </form>
        </div >
    );
};

export default SignUp;