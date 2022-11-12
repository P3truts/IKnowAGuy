import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import PATH from '../AppPaths';
import fetchapi from '../utils/fetchApi';

import '../pages/Login.css';

const Login = () => {
    const navigate = useNavigate();

    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        fetchapi.login("https://localhost:44497/account/login", {
            email,
            password
        }).then(response => {
            console.log(response);
            window.localStorage.setItem('token', response.token);
            window.localStorage.setItem('username', response.username);
            // setUsername(response.username);
        }).then(() => {
            navigate(PATH.Home);
        }).catch(error => {
            console.log(error)
        });

    }

    // style={{ padding: '25%' }}

    return (
        <div className='login-center'> 
            <form className="form-signin" onSubmit={submit}>
                <h1 className='h3 mb-3 fw-normal'>Please log in</h1>

                <div className='form-floating'>
                    <input type='email' className='form-control' placeholder='Email address' id='floatingEmail' required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor='floatingEmail'>Email</label>
                </div>

                <div className='form-floating'>
                    <input type='password' className='form-control' placeholder='Password' id='floatingPassword' required
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor='floatingPassword'>Password</label>
                </div>
                <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
            </form>
        </div>
    )
}

export default Login;