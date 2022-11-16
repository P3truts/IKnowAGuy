import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import PATH from '../AppPaths';
import { useAtom } from 'jotai';
import state from "../state.js";

const Logout = () => {
    const navigate = useNavigate();
    const [user, setUser] = useAtom(state.user);  

    const logout = async () => { await fetch("https://localhost:44497/account/logout", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    }).then(() => {
        window.localStorage.removeItem("token");
        setUser('');
        navigate(PATH.Home);
    });
    }

    useEffect(() => {
        logout();
    });
}

export default Logout;