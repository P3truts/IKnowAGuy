import { useNavigate } from 'react-router-dom';
import AdForm from '../components/AdForm';
import PATH from '../AppPaths';

import './CreateAd.css';
import { useEffect, useState } from 'react';

const CreateAd = () => {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);

    const isUserLogged = async () => {
        fetch('https://localhost:44497/account/user', {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        })
            .then((rsp) => {
                if (rsp.statusText === 'Unauthorized') {
                    navigate(PATH.LogIn);
                    setIsLoaded(true);
                }
                setIsLoaded(true);
            })
            .catch((e) => navigate(PATH.LogIn));
    };

    useEffect(() => {
        isUserLogged();
    }, []);

    return (
        <>
            {isLoaded && (
                <div className='create-ad-main'>
                    <div className='ad-form'>
                        <img src='./Assets/house.png' alt='house' style={{ padding: '2%' }} />
                        <AdForm />
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateAd;
