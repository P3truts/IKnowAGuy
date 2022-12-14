import { Link } from 'react-router-dom';
import PATH from '../AppPaths';
import { useAtom } from 'jotai';
import state from "../state.js";
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import '../css/NavMenu.css';

const NavMenu = () => {
    const [user, setUser] = useAtom(state.user);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        (
        async () => {
            const response = await fetch('https://localhost:44497/account/user', {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include'
        });
            // }).then((res) => response.json()).then((content) => setUsername(content));

            const content = await response.text();

            if (user.length == 0) {
                setUser(content);
            }

            console.log("nav menu Effect username", user);
        }
        )()
    }, [user]);

    const checkLogout = async () => {
        var answer = window.confirm("Are you sure you want to logout?");
        if (answer) {
            navigate(PATH.LogOut);
        }
    };

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
                        <li className='nav-item' style={{ marginRight: '4px'}}>
                            <Link to={PATH.Home} className='btn btn-outline-light'>
                                Home
                            </Link>
                        </li>
                        <>
                            <li className="nav-item" style={{marginRight: "4px"}}>
                                {user.length ? <button className="btn btn-outline-light">Hi, {user}</button> : <Link to={PATH.SignIn} className="btn btn-outline-light">Sign In</Link> }
                            </li>
                            <li className="nav-item" style={{marginRight: "4px"}}>
                                {user.length ? 
                                <button
                                    type='button'
                                    className="btn btn-outline-light"
                                    onClick={() => checkLogout()}
                                >
                                    Log Out
                                </button> : <Link to={PATH.LogIn} className="btn btn-outline-light">Log In</Link>}
                            </li>
                        </>
                        <li className='nav-item'>
                            <Link to={PATH.CreateAd} className='btn btn-info' style={{color: 'white'}}>
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
