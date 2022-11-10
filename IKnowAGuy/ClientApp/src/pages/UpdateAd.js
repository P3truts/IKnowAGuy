import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchapi from '../utils/fetchApi';
import FETCH_URL from '../AppFetchUrl';
import GeneralForm from '../components/GeneralForm';
import { getCurentTime } from '../utils/helpers';

const UpdateAd = () => {
    const [isPending, setIsPending] = useState(false);
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

    const handleSubmit = (e) => {
        e.preventDefault();

        ad.date = getCurentTime();
        setIsPending(true);
        console.log(ad);
        debugger;

        fetchapi.post(FETCH_URL.ads, ad).then(() => {
            setIsPending(false);
            //navigate(PATH.Home);
        });
    };

    const onChange = (e) => {
        const newAd = { ...ad };
        newAd[e.target.id] = e.target.value;
        setAd(newAd);
    };

    const onAddressChange = (e) => {
        const newAd = { ...ad };
        newAd.address[e.target.id] = e.target.value;
        setAd(newAd);
    };

    const onJobChateggory = (e) => {
        const newAd = { ...ad };
        newAd.jobCategory.name = e.target.value;
        setAd(newAd);
    };

    const onServiceChange = (e) => {
        const newAd = { ...ad };
        newAd.service.name = e.target.value;
        setAd(newAd);
    };

    return (
        <GeneralForm
            onSubmit={handleSubmit}
            onJobTypeChange={onJobChateggory}
            jobType={ad.jobCategory.name}
            onServiceChange={onServiceChange}
            service={ad.service.name}
            onCountyChange={onAddressChange}
            county={ad.address.county}
            counties={[{ nume: ad.address.county }]}
            onCityChange={onAddressChange}
            city={ad.address.city}
            cities={[{ nume: ad.address.city }]}
            onAdNameChange={onChange}
            adName={ad.name}
            onDescriptionChange={(e) => {
                const newAd = { ...ad };
                newAd.description = e.target.value;
            }}
            description={ad.description}
            isPending={isPending}
        />
    );
};

export default UpdateAd;
