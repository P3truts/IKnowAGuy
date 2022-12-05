import AdUpdateForm from '../components/AdUpdateForm';

const UpdateAd = () => {
    return (
        <div className='create-ad-main'>
            <div className='ad-form'>
                <img src='./Assets/house.png' alt='house' />
                <AdUpdateForm />
            </div>
        </div>
    );
};

export default UpdateAd;
