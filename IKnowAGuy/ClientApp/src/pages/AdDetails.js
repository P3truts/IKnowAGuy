import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function AdDetails() {
    const [ad, setAd] = useState([]);
    const { id } = useParams();

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

    useEffect(() => {
        loader();
    }, []);

    return (
        <>
            <h2 style={{ textAlign: 'left' }}>Ad Details</h2>
            {ad.id && (
            <div className='ads-div container'>
                <img src={`Assets/handyman-${ad.id}.png`} className='card-img-top' alt='...' />
                <div className='card-body'>
                    <h3>{ad.name}</h3>
                    <p className='card-text'>{ad.description}</p>
                        <p className='card-text'>{ad.date}</p>
                        {/* <p className='card-text'>{ad.jobCategory.name}</p>
                        <p className='card-text'>{ad.service.name}</p> */}
                        <a href='#' className='btn btn-primary'>
                            Contact
                        </a>
                    </div>
            </div>
            )}
        </>
    );
}