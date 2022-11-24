import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FETCH_URL from '../AppFetchUrl';
import fetchapi from '../utils/fetchApi';
import { getCurentTime, convertToBase64 } from '../utils/helpers';
import GeneralForm from './GeneralForm';

const AdUpdateForm = () => {
    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(false);
    const { id } = useParams();
    const [ad, setAd] = useState({
        address: {},
        description: '',
        jobCategory: {},
        name: '',
        service: {},
    });
    const loader = async () => {
        var headers = new Headers({
            Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            'Content-Type': 'application/json',
        });

        const req = await fetch(`ads/${id}`, {
            headers: headers,
            credentials: 'include',
        });
        if (req.ok) {
            const res = await req.json();
            setAd(res);
        } else {
            console.log('req is not ok');
            setAd([]);
        }
    };

    useEffect(() => {
        // fetchapi.get(`${FETCH_URL.ads}/${id}`).then((receivedAd) => {
        //     console.log(receivedAd);
        //     setAd(receivedAd);
        // });
        loader();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        ad.date = getCurentTime();
        setIsPending(true);
        console.log(ad);

        fetchapi
            .put(FETCH_URL.ads, ad)
            .then(() => {
                setIsPending(false);
                navigate(`/ad-details/${id}`);
            })
            .catch((e) => console.log(e));
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
        newAd.jobCategory[e.target.id] = e.target.value;
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
            onDescriptionChange={onChange}
            description={ad.description}
            uploadImage={async (e) => {
                const file = e.target.files[0];
                if (file) {
                    const base64 = await convertToBase64(file);
                    const newAd = { ...ad };
                    newAd.image = base64;
                    setAd(newAd);
                }
            }}
            isPending={isPending}
        />
    );
};

export default AdUpdateForm;
