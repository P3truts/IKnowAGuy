import '../css/AdForm.css';

const GeneralForm = ({
    onSubmit,
    onJobTypeChange,
    jobType = 'Choose category',
    onServiceChange,
    service = 'Choose a service',
    onCountyChange,
    county = 'Ilfov',
    counties,
    onCityChange,
    city = 'Bucuresti',
    cities,
    onAdNameChange,
    adName,
    onDescriptionChange,
    description,
    uploadImage,
    isPending,
}) => {
    return (
        <form className='form-ad' onSubmit={onSubmit}>
            <div className='mb-3'>
                <label htmlFor='job-type' className='form-label'>
                    Job Type
                </label>
                <select
                    onChange={onJobTypeChange}
                    id='jobType'
                    className='form-select'
                    name='job-type'
                    aria-label='Default select example'
                    //value={jobType}
                >
                    <option value='Piping'>Piping</option>
                    <option value='Electrics'>Electrics</option>
                    <option value='Carpentry'>Carpentry</option>
                </select>
            </div>

            <div className='mb-3'>
                <label htmlFor='service' className='form-label'>
                    Service
                </label>
                <select
                    onChange={onServiceChange}
                    className='form-select'
                    id='service'
                    name='service'
                    aria-label='Default select example'
                    //value={service}
                >
                    <option value='Pipe repairs'>Pipe repairs</option>
                    <option value='Electric installation'>Electric installation</option>
                    <option value='General repairs'>General repairs</option>
                </select>
            </div>
            <div className='mb-service3'>
                <label htmlFor='county' className='form-label'>
                    County
                </label>

                <select
                    onChange={onCountyChange}
                    className='form-select'
                    id='county'
                    name='county'
                    aria-label='Default select example'
                    value={county}
                >
                    {counties.length > 0 &&
                        counties.map((county, index) => (
                            <option key={index} value={county.nume}>
                                {county.nume}
                            </option>
                        ))}
                </select>
            </div>
            <div className='mb-3'>
                <label htmlFor='city' className='form-label'>
                    City
                </label>
                <select
                    onChange={onCityChange}
                    className='form-select'
                    id='city'
                    name='city'
                    aria-label='Default select example'
                    value={city}
                >
                    {cities.length > 0 &&
                        cities.map((city, index) => (
                            <option key={index} value={city.nume}>
                                {city.nume}
                            </option>
                        ))}
                </select>
            </div>
            <div className='mb-3'>
                <label htmlFor='ad-name' className='form-label'>
                    Ad Name
                </label>
                <input
                    onChange={onAdNameChange}
                    className='form-control'
                    id='name'
                    name='ad-name'
                    type='text'
                    aria-label='default input example'
                    value={adName}
                    required
                />
            </div>

            <div className='mb-3'>
                <label htmlFor='image' className='form-label'>
                    Image
                </label>
                <input
                    onChange={uploadImage}
                    className='form-control'
                    id='image'
                    name='image'
                    type='file'
                    accept='.jpeg, .png, .jpg'
                />
            </div>

            <div className='mb-3'>
                <div className='mb-3'>
                    <label htmlFor='description' className='form-label'>
                        Ad Description
                    </label>
                    <textarea
                        onChange={onDescriptionChange}
                        className='form-control'
                        id='description'
                        name='description'
                        rows='3'
                        defaultValue={description}
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
    );
};

export default GeneralForm;
