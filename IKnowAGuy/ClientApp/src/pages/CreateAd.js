import AdForm from '../components/AdForm';

import './CreateAd.css';

const CreateAd = () => {
    return (
        <div className='create-ad-main'>
            <div className='ad-form'>
                <img src='./Assets/house.png' alt='house' />
                <AdForm />
            </div>
        </div>
    );
};

export default CreateAd;
