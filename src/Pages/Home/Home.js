import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <div className="top-banner mb-4">
                <div className="text-center text-white bg-dark rounded py-5">
                    <h1 className='title pt-5'>Welcome to <span>Pixology</span></h1>
                    <p className='description'>Contact me for All Kinds of Photography</p>
                    <Link to='/'>
                        <button className='button rounded'>Hire Me</button>
                    </Link>
                </div>
            </div>
            <div className='mb-4'>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;