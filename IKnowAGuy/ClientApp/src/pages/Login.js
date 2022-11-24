import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PATH from '../AppPaths';
import fetchapi from '../utils/fetchApi';
import { useAtom } from 'jotai';
import state from '../state.js';

import '../pages/Login.css';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useAtom(state.user);

    const submit = async (e) => {
        e.preventDefault();

        fetchapi
            .includeCredentialsPost('https://localhost:44497/account/login', {
                email,
                password,
            })
            .then((response) => {
                if (response.token) {
                    alert('Login successfull!');
                    window.localStorage.setItem('token', response.token);
                    setUser(response.username);
                }
            })
            .then(() => {
                console.log(location);
                navigate(location.state);
            })
            .catch((error) => {
                console.log(error);
                alert('Login failed! Please check your credentials!');
            });
    };

    return (
        <div className='login-center'>
            <form className='form-signin' onSubmit={submit}>
                <h1 className='h3 mb-3 fw-normal'>Please log in</h1>

                <div className='form-floating'>
                    <input
                        type='email'
                        className='form-control'
                        placeholder='Email address'
                        id='floatingEmail'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor='floatingEmail'>Email</label>
                </div>

                <div className='form-floating'>
                    <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                        id='floatingPassword'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor='floatingPassword'>Password</label>
                </div>
                <button className='w-100 btn btn-lg btn-info' type='submit' style={{ color: 'white' }}>
                    Log in
                </button>
            </form>
        </div>
    );
};

export default Login;
