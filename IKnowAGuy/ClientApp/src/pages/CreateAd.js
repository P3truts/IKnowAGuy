import React from 'react';
import AdForm from '../components/AdForm';
import './CreateAd.css';

const CreateAd = () => {
    return (
        <>
            <div className='create-ad-main'>
                <div className='ad-form'>
                    <AdForm />
                </div>
            </div>
        </>
    );
};

export default CreateAd;
