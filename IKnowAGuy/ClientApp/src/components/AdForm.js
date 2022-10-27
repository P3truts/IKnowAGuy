import React from 'react';
import '../css/AdForm.css';
import { useState, useEffect } from 'react';
import fetchapi from '../utils/fetchApi';
import { useNavigate } from 'react-router-dom';
import PATH from '../AppPaths';
import { getCurentTime } from '../utils/helpers';

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
        roleId: '1234asdfasdasdf a',
        userId: '1234asdfasdasdf',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        ad.date = getCurentTime();

        setIsPending(true);

        fetchapi.post('ads', ad).then(() => {
            setIsPending(false);
            navigate(PATH.Home);
        });
    };

    const handleChange = (e) => {
        const newAd = { ...ad };
        newAd[e.target.id] = e.target.value;
        setAd(newAd);
    };

    return (
        <>
            <form className='form-ad' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='job-type' className='form-label'>
                        Job Type
                    </label>
                    <select
                        onChange={(e) => {
                            const newJobCategory = { ...jobCategory };
                            newJobCategory.name = e.target.value;
                            setJobCategory(newJobCategory);
                        }}
                        id='jobType'
                        className='form-select'
                        name='job-type'
                        aria-label='Default select example'
                        defaultValue={'JobCategory'}
                    >
                        <option value='JobCategory1'>One</option>
                        <option value='JobCategory2'>Two</option>
                        <option value='JobCategory3'>Three</option>
                    </select>
                </div>

                <div className='mb-3'>
                    <label htmlFor='service' className='form-label'>
                        Service
                    </label>
                    <select
                        onChange={(e) => {
                            const newService = { ...service };
                            newService.name = e.target.value;
                            setService(newService);
                        }}
                        className='form-select'
                        id='service'
                        name='service'
                        aria-label='Default select example'
                        defaultValue={'Service'}
                    >
                        <option value='Service'>One</option>
                        <option value='Service2'>Two</option>
                        <option value='Service3'>Three</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor='county' className='form-label'>
                        County
                    </label>

                    <select
                        onChange={(e) => {
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
                        className='form-select'
                        id='county'
                        name='county'
                        aria-label='Default select example'
                        defaultValue={'Ilfov'}
                    >
                        {counties.length > 1 &&
                            counties.map((county, index) => {
                                return (
                                    <option key={index} value={county.nume}>
                                        {county.nume}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor='city' className='form-label'>
                        City
                    </label>
                    <select
                        onChange={(e) => {
                            const newAddress = { ...address };
                            newAddress.city = e.target.value;
                            setAddress(newAddress);
                        }}
                        className='form-select'
                        id='city'
                        name='city'
                        aria-label='Default select example'
                        defaultValue={'Bucuresti'}
                    >
                        {cities.length > 1 &&
                            cities.map((city, index) => {
                                return (
                                    <option key={index} value={city.nume}>
                                        {city.nume}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor='ad-name' className='form-label'>
                        Ad Name
                    </label>
                    <input
                        onChange={(e) => {
                            const newAd = { ...ad };
                            newAd.name = e.target.value;
                            newAd.address = address;
                            newAd.jobCategory = jobCategory;
                            newAd.service = service;
                            setAd(newAd);
                        }}
                        className='form-control'
                        id='name'
                        name='ad-name'
                        type='text'
                        aria-label='default input example'
                        required
                    />
                </div>

                <div className='mb-3'>
                    <div className='mb-3'>
                        <label htmlFor='description' className='form-label'>
                            Ad Description
                        </label>
                        <textarea
                            onChange={(e) => {
                                const newAd = { ...ad };
                                newAd.description = e.target.value;
                                setAd(newAd);
                            }}
                            className='form-control'
                            id='description'
                            name='description'
                            rows='3'
                            required
                        ></textarea>
                    </div>
                </div>

                {!isPending ? (
                    <button type='submit' className='btn'>
                        Submit
                    </button>
                ) : (
                    <button disabled type='submit' className='btn'>
                        Adding Add...
                    </button>
                )}
            </form>
        </>
    );
};

export default AdForm;
