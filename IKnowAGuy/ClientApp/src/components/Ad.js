import React from 'react';
import '../css/Ad.css';

export const Ad = ({ ad }) => {
    const imagePath = 'Assets/handyman-' + ad.id + '.png';
    console.log(imagePath);
    return (
        <>
            <div className='card ad-card'>
                <img src={`Assets/handyman-${ad.id}.png`} className='card-img-top' alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>{ad.name}</h5>
                    <p className='card-text'>{ad.description}</p>
                    <p className='card-text'>{ad.date}</p>
                    <p className='card-text'>{ad.jobCategory.name}</p>
                    <p className='card-text'>{ad.service.name}</p>
                    <a href='#' className='btn btn-primary'>
                        Contact
                    </a>
                </div>
            </div>
        </>
    );
};
