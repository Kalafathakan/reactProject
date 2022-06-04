import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { decode } from 'punycode';
 
const Login = () => {
  //state variables for form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
 
  const { email, password } = formData;
 
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
      email: email,
      password: password,
    };
 
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth',
        data,
        config
      );
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(decode(response.data.token));
    } catch (e) {
      
    }
  };
 
  return (
    <>
      <h1>Sign In</h1>
      <p>Sign Into Your Account</p>
      <form onSubmit={(e) => onSubmit(e)}>
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
 
        <input type='submit' value='Login' />
      </form>
      <p>
        <Link to='/register'>Register</Link>
      </p>
    </>
  );
};
 
export default Login;