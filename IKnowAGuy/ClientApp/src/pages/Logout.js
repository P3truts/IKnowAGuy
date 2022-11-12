import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import PATH from '../AppPaths';

const Logout = () => {
    const navigate = useNavigate();
    // const [loggedOut, setLoggedOut] = useState(false);

    const logout = async () => { await fetch("https://localhost:44497/account/logout", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    }).then(() => {
        window.localStorage.removeItem("token");
        navigate(PATH.Home);
        // setLoggedOut(true);
    });
    }

    useEffect(() => {
        logout();
    });
}

export default Logout;