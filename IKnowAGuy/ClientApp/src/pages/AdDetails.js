import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PATH from '../AppPaths';
import fetchapi from '../utils/fetchApi';

import '../pages/AdDetails.css';

const AdDetails = () => {
    const [ad, setAd] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    console.log(ad);

    const loader = async () => {
        const req = await fetch(`ads/${id}`);
        // const req = await fetch(`ads/${1}`);
        if (req.ok) {
            const res = await req.json();
            setAd(res);
        } else {
            console.log('req is not ok');
            setAd([]);
        }
    };

    const deleteAd = async () => {
        fetchapi.delete(`ads/delete/${id}`).then(() => {
            navigate(PATH.Home);
        });
    };

    // const updateAd = async () => {
    //     fetchapi.put(`ads/update-ad/${id}`).then(() => {
    //         // console.log(`ad ${id} is deleted`);
    //         navigate(PATH.Home);
    //     });
    // };

    useEffect(() => {
        loader();
    }, []);

    return (
        ad.id && (
            <div className='container' style={{ paddingLeft: '20%' }}>
                <h2>
                    Ad Details
                    <Link
                        to={`/update-ad/${id}`}
                        className='btn btn-info'
                        style={{ position: 'relative', left: '38%' }}
                    >
                        Update
                    </Link>
                    <button
                        type='button'
                        className='btn btn-danger'
                        style={{ position: 'relative', left: '38%' }}
                        onClick={() => deleteAd()}
                    >
                        Delete
                    </button>
                </h2>
                <img src={`Assets/handyman-${ad.id}.png`} style={{ width: '70%' }} alt='...' />
                <div className='card-body'>
                    <h3>{ad.name}</h3>
                    <p className='card-text'>{ad.description}</p>
                    <p className='card-text'>
                        {ad.date.split('T')[0]} {ad.date.split('T')[1].slice(0, 5)}
                    </p>
                    <p className='card-text'>{ad.jobCategory.name}</p>
                    <p className='card-text'>{ad.service.name}</p>
                    <a href='#' className='btn btn-primary'>
                        Contact
                    </a>
                </div>
            </div>
        )
    );
};
export default AdDetails;
