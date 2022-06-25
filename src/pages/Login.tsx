import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import AuthContext, { AuthContextType } from '../context/AuthContext';

const Login = () => {
  const auth = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  //state variables for form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  
  const [emailError, setEmailError] = useState('');

  const [error, setError] = useState();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formValid = true;
    let emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === '') {
      formValid = false;
      setEmailError('Please enter email');
    } else if (!email.match(emailPattern)) {
      formValid = false;
      setEmailError('Please enter email in valid format');
    } else {
      formValid = true;
      setEmailError('');
    }

    if (formValid) {

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
      console.log(data)
      const response = await axios.post(
        'https://shielded-depths-40144.herokuapp.com/login',
        data,
        config
      );
      console.log("my token "+response.data.token)
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      auth.login();
      navigate('/mypage');
      console.log(decode(response.data.token));
    } catch (err: any) {
      console.log(err);
      setError(err.response.data.errors || 'something went wrong');
    }
  }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <div className="center">
        <p><b>Sign into your account</b></p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form className="loginBox" onSubmit={(e) => onSubmit(e)}>
          <div>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            />
             {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
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
          Don't have an account? <Link to='/register'>Sign up now!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;