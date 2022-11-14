import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import PATH from '../AppPaths';
import fetchapi from '../utils/fetchApi';

import '../pages/Register.css';

const Register = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [roles, setRoles] = useState('');

    const options = [
        {value: '', text: 'Choose a type from the list'},
        {value: 'client', text: 'Client'},
        {value: 'handyman', text: 'Handyman'},
        {value: 'admin', text: 'Admin'},
      ];
    
      const [selected, setSelected] = useState(options[0].value);
    
      const handleRoleChange = event => {
        setSelected(event.target.value);
        setRoles([event.target.value]);
      };


    const submit = async (e) => {
        e.preventDefault();

        fetchapi.post("https://localhost:44497/account/register", {
                username,
                firstName,
                lastName,
                email,
                phoneNumber,
                password,
                confirmPassword,
                roles
            }).then(() => {
            navigate(PATH.LogIn);
        });

        // await fetch("https://localhost:44497/account/register", {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         username,
        //         firstName,
        //         lastName,
        //         email,
        //         phoneNumber,
        //         password,
        //         confirmPassword,
        //         roles
        //     })
        // }).then(() => {
        //     navigate(PATH.LogIn);
        // });


        // const content = await response.json();

        // console.log(content);

        // console.log({
        //     username,
        //     firstName,
        //     lastName,
        //     email,
        //     phoneNumber,
        //     password,
        //     confirmPassword,
        //     roles
        //   });
    }

    // style={{ padding: '15%' }}

    return (
        <div className="mb-3 register-center">
            <form onSubmit={submit}>
                <h1 className='h3 mb-3 fw-normal'>Register</h1>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required
                    onChange={e => setUsername(e.target.value)}
                />
                <input type="text" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" required
                    onChange={e => setFirstName(e.target.value)}
                />
                <input type="text" className="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" required
                    onChange={e => setLastName(e.target.value)}
                />
                <input type='email' className='form-control' placeholder='Email address' required
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="tel" className="form-control" placeholder="Phone Number" aria-label="Phone Number" aria-describedby="basic-addon1" required
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <input type='password' className='form-control' placeholder='Password' required
                    onChange={e => setPassword(e.target.value)}
                />
                <input type='password' className='form-control' placeholder='Confirm password' required
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <label className="input-group-text" htmlFor="inputGroupSelectRole">Account type</label>
                <select className="form-select" id="inputGroupSelectRole" value={selected} onChange={handleRoleChange}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
                <button className='w-100 btn btn-lg btn-info' type='submit' style={{color: 'white'}}>Submit</button>
            </form>
        </div>
    )
}

export default Register;