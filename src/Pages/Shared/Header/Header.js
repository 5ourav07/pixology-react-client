import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/Logo.jpg';

const Header = () => {
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
                        <Nav.Link href="/my-service">My Service</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="#">Blog</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>

                    {/* <Nav className='d-flex align-items-center'>
                        <>
                            {
                                user?.uid
                                    ?
                                    <>
                                        <span className='display-name'>{user?.displayName}</span>
                                        <Link to='/' className='link p-0 mx-3'>Log Out</Link>
                                    </>
                                    :
                                    <>
                                        <Link className='link me-3' to="/login">Login</Link>
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
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;