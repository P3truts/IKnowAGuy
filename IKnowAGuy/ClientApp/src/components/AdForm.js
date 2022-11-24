import '../css/AdForm.css';

import { useState, useEffect } from 'react';
import fetchapi from '../utils/fetchApi';
import { useNavigate } from 'react-router-dom';
import PATH from '../AppPaths';
import { convertToBase64, getCurentTime } from '../utils/helpers';
import GeneralForm from './GeneralForm';

const LOCATIONS_API = 'https://roloca.coldfuse.io';

const AdForm = () => {
    const [counties, setCounties] = useState([]);
    const [county, setCounty] = useState('');
    const [countyAuto, setCountyAuto] = useState('');
    const [cities, setCities] = useState([]);

    const loader = async (url, cb) => {
        fetchapi.get(url).then((res) => {
            cb(res);
        });
    };

    useEffect(() => {
        if (counties.length === 0) {
            loader(LOCATIONS_API + '/judete', setCounties);
        }
        if (countyAuto) {
            loader(LOCATIONS_API + '/orase/' + countyAuto, setCities);
        } else {
            loader(LOCATIONS_API + '/orase/AB', setCities);
        }
    }, [county]);

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const [service, setService] = useState({
        name: '',
        description: 'service description',
    });

    const [jobCategory, setJobCategory] = useState({
        jobCategory: {
            name: '',
            description: 'category description',
        },
    });
    const [address, setAddress] = useState({
        city: '',
        county: '',
    });

    const [ad, setAd] = useState({
        name: '',
        description: '',
        address: address,
        jobCategory: jobCategory,
        service: service,
        image: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        ad.date = getCurentTime();

        setIsPending(true);

        fetchapi.includeCredentialsPost('ads', ad).then(() => {
            setIsPending(false);
            navigate(PATH.Home);
        });
    };

    return (
        <GeneralForm
            onSubmit={handleSubmit}
            onJobTypeChange={(e) => {
                const newJobCategory = { ...jobCategory };
                newJobCategory.name = e.target.value;
                setJobCategory(newJobCategory);
            }}
            jobType={jobCategory}
            onServiceChange={(e) => {
                const newService = { ...service };
                newService.name = e.target.value;
                setService(newService);
            }}
            service={service}
            onCountyChange={(e) => {
                const newAddress = { ...address };
                newAddress.county = e.target.value;

                counties.forEach((c) => {
                    if (c.nume === e.target.value) {
                        setCountyAuto(c.auto);
                        return;
                    }
                });

                setCounty(e.target.value);
                setAddress(newAddress);
            }}
            county={county}
            counties={counties}
            onCityChange={(e) => {
                const newAddress = { ...address };
                newAddress.city = e.target.value;
                setAddress(newAddress);
            }}
            city={ad.city}
            cities={cities}
            onAdNameChange={(e) => {
                const newAd = { ...ad };
                newAd.name = e.target.value;
                newAd.address = address;
                newAd.jobCategory = jobCategory;
                newAd.service = service;
                setAd(newAd);
            }}
            adName={ad.name}
            onDescriptionChange={(e) => {
                const newAd = { ...ad };
                newAd.description = e.target.value;
                setAd(newAd);
            }}
            uploadImage={async (e) => {
                const file = e.target.files[0];
                const base64 = await convertToBase64(file);
                const newAd = { ...ad };
                newAd.image = base64;
                setAd(newAd);
            }}
            description={ad.description}
            isPending={isPending}
        />
    );
};

export default AdForm;
