import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import { Button } from 'react-bootstrap';
import ReverseServices from '../Services/ReverseServices';
import './Home.css';
import Coffee from './Coffee';
import Faq from './Faq';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle('Home');

    return (
        <div className='container'>
            <div className="top-banner mb-4">
                <div className="text-center text-white bg-dark rounded py-5">
                    <h1 className='title pt-5'>Welcome to <span className='main-title'>Pixology</span></h1>
                    <p className='description'>Contact me for All Kinds of Photography</p>
                    <Link to='/'>
                        <button className='button rounded'>Hire Me</button>
                    </Link>
                </div>
            </div>

            <div className='mb-4'>
                <Slider></Slider>
            </div>

            <div className='mb-4'>
                <ReverseServices></ReverseServices>
                <Link to='/services' className='d-flex justify-content-center align-items-center mt-3'>
                    <Button variant="primary">See All</Button>
                </Link>
            </div>

            <div className='mb-4'>
                <Coffee></Coffee>
            </div>

            <div className='mb-4'>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;