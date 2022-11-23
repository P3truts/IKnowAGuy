import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PATH from '../AppPaths';
import fetchapi from '../utils/fetchApi';
import { formatTime } from '../utils/helpers';

import '../pages/AdDetails.css';

const AdDetails = () => {
    const [ad, setAd] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const loader = async () => {
        var headers = new Headers({
            Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            'Content-Type': 'application/json',
        });

        if (window.localStorage.getItem('token') === null) {
            navigate(PATH.LogIn);
        } else {
            const req = await fetch(`ads/${id}`, {
                headers: headers,
                credentials: 'include',
            });
            if (req.ok) {
                const res = await req.json();
                setAd(res);
            } else {
                console.log('req is not ok');
                navigate(PATH.LogIn);
                setAd([]);
            }
        }
    };

    const deleteAd = async () => {
        fetchapi.delete(`ads/delete/${id}`).then(() => {
            navigate(PATH.Home);
        });
    };

    useEffect(() => {
        loader();
    }, []);

    return (
        ad.id && (
            <div className='container' style={{ padding: '2%', position: 'relative', paddingLeft: '15%' }}>
                <h2>
                    Ad Details
                    <Link
                        to={`/update-ad/${id}`}
                        className='btn btn-warning me-5'
                        style={{ position: 'relative', left: '45%' }}
                    >
                        Update
                    </Link>
                    <button
                        type='button'
                        className='btn btn-danger'
                        style={{ position: 'relative', left: '41%' }}
                        onClick={() => deleteAd()}
                    >
                        Delete
                    </button>
                </h2>
                {ad.image && <img src={ad.image} alt='img' style={{maxWidth: "75%", maxHeight: "75%"}}></img>}
                {!ad.image && <img src={`Assets/Placeholder_image.png`} alt='placeholder_img' />}
                <div className='card-body'>
                    <h3>{ad.name}</h3>
                    <p className='card-text'>
                        <strong>Description</strong>: {ad.description}
                    </p>
                    <p className='card-text'>
                        <strong>Date</strong>: {formatTime(ad.date)}
                    </p>
                    <p className='card-text'>
                        <strong>Category</strong>: {ad.jobCategory.name}
                    </p>
                    <p className='card-text'>
                        <strong>Service</strong>: {ad.service.name}
                    </p>
                    <p className='card-text'>
                        <strong>City</strong>: {ad.address.city}
                    </p>
                    <p className='card-text'>
                        <strong>County</strong>: {ad.address.county}
                    </p>
                    <a href='#' className='btn btn-info' style={{ color: 'white' }}>
                        Contact
                    </a>
                </div>
            </div>
        )
    );
};
export default AdDetails;
