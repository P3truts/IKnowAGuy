import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchapi from '../utils/fetchApi';
import FETCH_URL from '../AppFetchUrl';
import GeneralForm from '../components/GeneralForm';

const UpdateAd = () => {
    const { id } = useParams();
    const [ad, setAd] = useState({
        address: { county: '', city: '' },
        description: '',
        jobCategory: { services: '', name: '', description: '' },
        name: '',
        service: { name: '', description: '' },
    });

    useEffect(() => {
        fetchapi.get(`${FETCH_URL.ads}/${id}`).then((ad) => {
            setAd(ad);
            console.log(ad);
        });
    }, []);
    console.log(ad.address.county);

    const handleSubmit = () => {
        console.log('submit');
    };

    const onJobTypeChange = () => {
        console.log('on job type change');
    };

    const onServiceChange = () => {
        console.log('service change');
    };
    const onCountyChange = () => {
        console.log('service change');
    };

    const cityChange = () => {
        console.log('service change');
    };

    const adNameChange = () => {
        console.log('ad name change');
    };

    const changeDescription = () => {
        console.log('description');
    };

    return (
        <GeneralForm
            onSubmit={handleSubmit}
            onJobTypeChange={onJobTypeChange}
            jobType={ad.jobCategory.name}
            onServiceChange={onServiceChange}
            service={ad.service.name}
            onCountyChange={onCountyChange}
            county={ad.address.county}
            counties={[{ nume: ad.address.county }]}
            onCityChange={cityChange}
            city={ad.address.city}
            cities={[{ nume: ad.address.city }]}
            onAdNameChange={adNameChange}
            adName={ad.name}
            onDescriptionChange={(e) => {
                const newAd = { ...ad };
                newAd.description = e.target.value;
            }}
            description={ad.description}
            isPending={true}
        />
    );
};

export default UpdateAd;
