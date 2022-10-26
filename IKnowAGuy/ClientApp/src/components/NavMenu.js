import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavMenu.css';
import AppPaths from '../AppPaths';

const NavMenu = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg'>
                <div className='container-fluid'>
                    <Link to={AppPaths.Home} className='navbar-brand'>
                        IKnowAGuy
                    </Link>
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
                                <button type='button' className='btn'>
                                    <Link to={AppPaths.Home} className='navbar-brand'>
                                        Home
                                    </Link>
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button type='button' className='btn'>
                                    <Link to={AppPaths.CreateAd} className='navbar-brand'>
                                        Sign In
                                    </Link>
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button type='button' className='btn'>
                                    <Link to={AppPaths.CreateAd} className='navbar-brand'>
                                        Log In
                                    </Link>
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button type='button create-ad-button' className='btn btn-info'>
                                    <Link to={AppPaths.CreateAd} className='navbar-brand'>
                                        Create Ad
                                    </Link>
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
