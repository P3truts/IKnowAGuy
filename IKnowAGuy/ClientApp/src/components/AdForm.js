import React from 'react';
import './AdForm.css';
import { useState } from 'react';
import fetchapi from '../utils/fetchApi';
import { useNavigate } from 'react-router-dom';
import PATH from '../AppPaths';

const AdForm = () => {
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
        setIsPending(true);

        fetchapi.post('ads', ad).then(() => {
            setIsPending(false);
            navigate(PATH.Home);
        });

        // fetch('ads', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(ad),
        // })
        //     .then((res) => res.json())
        //     .then((serverRes) => console.log(serverRes))
        //     .catch((e) => console.log(e));
    };

    const handleChange = (e) => {
        const newAd = { ...ad };
        newAd[e.target.id] = e.target.value;
        setAd(newAd);
    };

    return (
        <>
            <form className='form-test' onSubmit={handleSubmit}>
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
                            setAddress(newAddress);
                        }}
                        className='form-select'
                        id='county'
                        name='county'
                        aria-label='Default select example'
                        defaultValue={'Ilfov'}
                    >
                        <option value='Ilfov'>Ilfov</option>
                        <option value='Timis'>Timis</option>
                        <option value='Cluj'>Cluj</option>
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
                            console.log(newAddress);
                        }}
                        className='form-select'
                        id='city'
                        name='city'
                        aria-label='Default select example'
                        defaultValue={'Bucuresti'}
                    >
                        <option value='Bucuresti'>Bucuresti</option>
                        <option value='Timisoara'>Timisoara</option>
                        <option value='Cluj-Napoca'>Cluj-Napoca</option>
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
                        placeholder='Default input'
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
                            placeholder='Min 10 words'
                            required
                        ></textarea>
                    </div>
                </div>

                {!isPending ? (
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                ) : (
                    <button disabled type='submit' className='btn btn-primary'>
                        Adding Add...
                    </button>
                )}
            </form>
        </>
    );
};

export default AdForm;
