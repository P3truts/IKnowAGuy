import React from 'react';

const Register = () => {
    return (
        <div class="mb-3" style={{ padding: '15%' }}>
            <form>
                <h1 className='h3 mb-3 fw-normal'>Register</h1>
                <input type='email' className='form-control' placeholder='Email address' required/>
                <input type='password' className='form-control' placeholder='Password' required/>
                <input type='password' className='form-control' placeholder='Confirm password' required/>
                <button className='w-100 btn btn-lg btn-primary' type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register;