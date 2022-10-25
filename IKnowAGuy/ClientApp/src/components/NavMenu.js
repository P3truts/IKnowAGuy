import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg'>
                <div className='container-fluid'>
                    <a className='navbar-brand'>IKnowAGuy</a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                {/* <a className='nav-link active' aria-current='page'>
                                    Home
                                </a> */}
                                <button type='button' className='btn'>
                                    <a className='nav-link'>Home</a>
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button type='button' className='btn'>
                                    <a className='nav-link'>Sign In</a>
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button type='button' className='btn'>
                                    <a className='nav-link'>Log In</a>
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button type='button create-ad-button' className='btn btn-info'>
                                    <a className='nav-link'>Create Ad</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavMenu;
