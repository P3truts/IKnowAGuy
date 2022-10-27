import React from 'react';
import '../css/Ad.css';
import { Link } from 'react-router-dom';

const AdCard = ({ ad }) => {
    // const imagePath = 'Assets/handyman-' + ad.id + '.png';
    // console.log(imagePath);
    return (
        <>
            <div className='card ad-card'>
                <img src={`Assets/handyman-${ad.id}.png`} className='card-img-top' alt='...' />
                <div className='card-body'>
                    {/* <h5 className='card-title'>
                        <a href={ad.id}>{ad.name}</a>
                        </h5> */}
                    <button type='button' className='btn'>
                                <Link to={`/ad-details/${ad.id}`} className='navbar-brand' style={{ color: 'black' }}>
                                    {ad.name}
                                </Link>
                            </button>
                    <p className='card-text' style={{ color: 'grey' }}>{ad.description}</p>
                    <p className='card-text'>{ad.date.split('T')[0]} {ad.date.split('T')[1].slice(0, 5)}</p>
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

export default AdCard;
