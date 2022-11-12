import AdForm from '../components/AdForm';

import './CreateAd.css';

const CreateAd = () => {
    return (
        <div className='create-ad-main'>
            <div className='ad-form'>
                <img src='./Assets/house.png' alt='house' style={{padding: '2%'}} />
                <AdForm />
            </div>
        </div>
    );
};

export default CreateAd;
