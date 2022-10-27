import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../pages/AdDetails.css';

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

    const deleteAd = async () => {
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

    const updateAd = async () => {
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
            
            {ad.id && (
            <div className='container' style={{ 'paddingLeft' : '20%' }}>
                <h2>Ad Details
                    <button type='button' className='btn btn-info' style={{ 'position' : 'relative', 'left' : '38%' }} onClick={() => updateAd(ad.id)}>
                        Update
                    </button>
                    <button type='button' className='btn btn-danger' style={{ 'position' : 'relative', 'left' : '38%' }} onClick={() => deleteAd(ad.id)}>
                        Delete
                    </button>
                </h2>
                <img src={`Assets/handyman-${ad.id}.png`} style={{ 'width' : '70%' }} alt='...' />
                <div className='card-body'>
                    <h3>{ad.name}</h3>
                    <p className='card-text'>{ad.description}</p>
                        <p className='card-text'>{ad.date.split('T')[0]} {ad.date.split('T')[1].slice(0, 5)}</p>
                        <p className='card-text'>{ad.jobCategory.name}</p>
                        <p className='card-text'>{ad.service.name}</p>
                        <a href='#' className='btn btn-primary'>
                            Contact
                        </a>
                    </div>
            </div>
            )}
        </>
    );
}