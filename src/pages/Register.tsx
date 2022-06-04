import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
 
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
 
  const { name, email, password, password2 } = formData;
 
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
 
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
 
    let data = {
      name: name,
      email: email,
      password: password,
    };
 
    try {
      const response = await axios.post(
        'http://localhost:5000/api/user',
        data,
        config
      );
      localStorage.setItem('token', response.data.token);
 
      let decodeddata = decode(response.data.token);
      console.log(decodeddata);
    } catch (e) {
      console.log('error ', e);
    }
  };
  return (
    <>
      <h1>Sign Up</h1>
      <p>Create Your Account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
      
          />
        </div>
        <input type='submit' value='Register' />
      </form>
      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </>
  );
};
 
export default Register;