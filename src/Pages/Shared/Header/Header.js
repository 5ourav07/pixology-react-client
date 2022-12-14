import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/Logo.jpg';
import { AuthContext } from '../../../Contexts/AuthProvider';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className='header mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className="navbar-brand" to="/">
                    <img style={{ height: 30 }} src={Logo} alt="Logo" className="logo me-2" />
                    Pixology
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/blogs">Blog</Nav.Link>
                        <>
                            {
                                user?.uid
                                    ?
                                    <>
                                        <Nav.Link href="/my-service">Add Service</Nav.Link>
                                        <Nav.Link href="/review">My Review</Nav.Link>
                                    </>
                                    :
                                    <>
                                        <div className='d-none'>
                                            <Nav.Link href="/my-service">Add Service</Nav.Link>
                                            <Nav.Link href="/review">My Review</Nav.Link>
                                        </div>
                                    </>
                            }
                        </>
                    </Nav>

                    <Nav className='d-flex align-items-center'>
                        <>
                            {
                                user?.uid
                                    ?
                                    <>
                                        <span className='display-name'>{user?.displayName}</span>
                                        <Link to='/' className='link p-0 m-0 mx-3' onClick={handleLogOut}>Log Out</Link>
                                    </>
                                    :
                                    <>
                                        <Link className='link p-0 m-0' to="/login">Login</Link>
                                    </>
                            }
                        </>

                        <>
                            {
                                user?.photoURL
                                    ?
                                    <Image title={user.displayName} style={{ height: '30px' }} src={user?.photoURL} roundedCircle></Image>
                                    :
                                    <FaUser></FaUser>
                            }
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;