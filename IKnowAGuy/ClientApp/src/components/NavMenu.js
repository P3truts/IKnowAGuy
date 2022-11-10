import { Link } from 'react-router-dom';
import PATH from '../AppPaths';

import '../css/NavMenu.css';

const NavMenu = () => {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg'>
            <div className='container'>
                <Link to={PATH.Home} className='navbar-brand'>
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
                    <ul className='ms-auto navbar-nav'>
                        <li className='nav-item'>
                            <Link to={PATH.Home} className='btn btn-outline-light'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={PATH.CreateAd} className='btn btn-outline-light'>
                                Sign In
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={PATH.CreateAd} className='btn btn-outline-light'>
                                Log In
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={PATH.CreateAd} className='btn btn-info'>
                                Create Ad
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavMenu;
