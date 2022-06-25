import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import AuthContext, { AuthContextType } from '../context/AuthContext';
import '../styles/bootstrap.css'

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
  const [passwordError, setpasswordError] = useState('');

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
    } else if(password === ""){
      formValid = false;
      setEmailError('');
      setpasswordError("please enter your password")
    } else {
      formValid = true;
      setEmailError('');
      setpasswordError("")
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
        console.log("my token " + response.data.token)
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
    <div className='mybootstrap '>
      <div className="container mt-5 mb-5 w-50  ">
        <div className="modal-lg  mx-auto bg-light bg-opacity-25" >
          <div className="modal-lg-dialog ">
            <div className="modal-content rounded-5 shadow text-center">
              <div className="modal-header  ">
                <h2 className="mx-auto my-auto mt-5 mb-5  ">Sign in</h2>
              </div>
              <h4> {error && <p style={{ color: 'red' }}>{error}</p>}  </h4>
              <div className="modal-body ">
                <form className="row justify-content-center " onSubmit={(e) => onSubmit(e)} noValidate>
                  <div className="col-7">
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control rounded-4" placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="email">Email address</label>
                      <div className="form-text text-danger"> {emailError && <p >{emailError}</p>} </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control rounded-4"  placeholder='Password'
              name='password'

              value={password}
              onChange={(e) => onChange(e)} />
                      <label htmlFor="password">Password</label>
                      <div className="form-text text-danger">{passwordError && <p >{passwordError}</p>}</div>
                    </div>
                    <button className="w-50 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Sign
                      in</button>
                    <div className="w-100"></div>
                    <small className="text-muted ">By clicking Sign in, you agree to the terms of
                      use.</small>
                    <div className="modal-footer mt-4">
                      <h2 className="mx-auto my-auto " >Don't You Have an Account?</h2>
                      <div className="w-100"></div>
                      <a className="w-50 mt-2 btn btn-lg rounded-4 btn-primary border mx-auto mb-5" href="/register" role="button">Sign Up</a>
                      <div className="w-100"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* <h1 id="topics-hk">Sign In</h1>
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

          <input className="btn btn-primary" type='submit' value='Login' />
        </form>
        <p>
          Don't have an account? <Link to='/register'>Sign up now!</Link>
        </p>
      </div> */}
    </div>
  );
};

export default Login;