import React from 'react';

const AdForm = () => {
    return (
        <>
            <div className='ad-form'>
                <form>
                    <div className='mb-3'>
                        <label for='job-type' className='form-label'>
                            Job Type
                        </label>
                        <select className='form-select' name='job-type' aria-label='Default select example'>
                            <option selected>Default</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                        </select>
                    </div>

                    <div className='mb-3'>
                        <label for='job-category' className='form-label'>
                            Job Category
                        </label>
                        <select
                            className='form-select'
                            name='job-category'
                            aria-label='Default select example'
                            required
                        >
                            <option selected>Default</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label for='ad-name' className='form-label'>
                            Ad Name
                        </label>
                        <input
                            class='form-control'
                            name='ad-name'
                            type='text'
                            placeholder='Default input'
                            aria-label='default input example'
                            required
                        />
                    </div>

                    <div className='mb-3'>
                        <div class='mb-3'>
                            <label for='description' class='form-label'>
                                Ad Description
                            </label>
                            <textarea
                                class='form-control'
                                name='description'
                                id='exampleFormControlTextarea1'
                                rows='3'
                                placeholder='Min 10 words'
                                required
                            ></textarea>
                        </div>
                    </div>

                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default AdForm;
