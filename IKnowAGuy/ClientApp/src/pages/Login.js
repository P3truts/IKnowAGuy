import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import PATH from '../AppPaths';
import fetchapi from '../utils/fetchApi';

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
        }).then(() => {
            navigate(PATH.Home);
        });
    }

    return (
        <div className="mb-3" style={{ padding: '15%' }}>
            <form onSubmit={submit}>
                <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
                <input type='email' className='form-control' placeholder='Email address' required
                    onChange={e => setEmail(e.target.value)}
                />
                <input type='password' className='form-control' placeholder='Password' required
                    onChange={e => setPassword(e.target.value)}
                />
                <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
            </form>
        </div>
    )
}

export default Login;