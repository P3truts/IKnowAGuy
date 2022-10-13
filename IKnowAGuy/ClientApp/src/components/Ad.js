import React from 'react';

export const Ad = ({ ad }) => {
    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>{ad.name}</h5>
                    <p className='card-text'>{ad.description}</p>
                    <p className='card-text'>{ad.date}</p>
                    <p className='card-text'>{ad.jobCategory.Name}</p>
                    <a href='#' className='btn btn-primary'>
                        Contact
                    </a>
                </div>
            </div>
        </>
    );
};
