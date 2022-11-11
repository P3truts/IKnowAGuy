import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import PATH from '../AppPaths';
import fetchapi from '../utils/fetchApi';

const Logout = () => {
    const navigate = useNavigate();

    const logout = async () => { await fetch("https://localhost:44497/account/logout", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    }).then(() => {
        navigate(PATH.Home);
    });
    }

    useEffect(() => {
        logout();
    });
}

export default Logout;