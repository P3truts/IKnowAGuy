import React, {useState} from 'react';

const Register = () => {
    const [name, setName] = useState('');

    return (
        <div class="mb-3" style={{ padding: '15%' }}>
            <form>
                <h1 className='h3 mb-3 fw-normal'>Register</h1>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required/>
                <input type="text" class="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" required/>
                <input type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" required/>
                <input type='email' className='form-control' placeholder='Email address' required/>
                <input type="tel" class="form-control" placeholder="Phone Number" aria-label="Phone Number" aria-describedby="basic-addon1" required/>
                <input type='password' className='form-control' placeholder='Password' required/>
                <input type='password' className='form-control' placeholder='Confirm password' required/>
                <button className='w-100 btn btn-lg btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register;