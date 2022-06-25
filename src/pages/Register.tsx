import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import AuthContext, { AuthContextType } from '../context/AuthContext';

type Props = {}

const Register = (props: Props) => {





  const auth = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const [formData2, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData2;

  const [emailError, setEmailError] = useState('');
  const [pswdError, setpswdError] = useState('');
  const [cpswdError, setcpswdError] = useState('');
  const [error, setError] = useState();

  // const [emailFromForm, setEmail] = useState("");

  // const [passwordFromForm, setPassword] = useState("");

  // const handleChangeForEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e);
  //   setEmail(e.target.value);
  // };

  // const handleChangeForPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e);
  //   setPassword(e.target.value);
  // };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  setFormData({ ...formData2, [e.target.name]: e.target.value });


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
    } else if (password === ''){
      formValid = false;
      setEmailError('');
      setpswdError('Please enter password');
    }else if(password.length < 5){
      formValid = false;
      setEmailError('');
      setpswdError('password should be more than 5 characters');
    } else if(password2 === ''){
      formValid = false;
      setEmailError('');
      setpswdError('');
      setcpswdError('Please enter confirm password');
    } else if(password2.length < 5){
      formValid = false;
      setEmailError('');
      setpswdError('');
      setcpswdError('password should be more than 5 characters');
    } else if(password2 !== password){
      formValid = false;
      setEmailError('');
      setpswdError('');
      setcpswdError('password and confirm password does not match');
    }else {
      formValid = true;
      setEmailError('');
      setpswdError('');
      setcpswdError('');
     console.log("pass it")
    }

    if (formValid) {


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
        'https://shielded-depths-40144.herokuapp.com/registration',
        data,
        config
      );
      localStorage.setItem('token', response.data.token);

      let decodeddata = decode(response.data.token);
      console.log(decodeddata);
      auth.login();
      navigate('/menu');
    } catch (e: any) {
      console.log('error ', e.message);
      setError(e.response.data.errors || 'something went wrong');
    }
  }
  };

  // const sendPostRequest = async () => {
  //   try {
  //     const response = await axios.post(
  //       'https://shielded-depths-40144.herokuapp.com/registration',
  //       {
  //         email: emailFromForm,
  //         password: passwordFromForm
  //       }
  //     );

  //     console.log(response);
  //     if (response.status.toString() === "201") {
  //       console.log("you signup successfully")
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div> 
    {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"/> */}

    <div className="center">
      <h1 className="text-center">Sign Up</h1>
      <p><b>Create Your Account</b></p>
      <br></br>
      <form className="loginBox" onSubmit={(e) => onSubmit(e)} noValidate>
        <div>
          <input
            type='text'
            placeholder='Name'
            name='name'
            required
            value={name}
            onChange={(e) => onChange(e)}
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
          {pswdError && <p style={{ color: 'red' }}>{pswdError}</p>}
        </div>
        <div>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
          />
           {cpswdError && <p style={{ color: 'red' }}>{cpswdError}</p>}
        </div>
       
        <input type='submit' value='Register' className="btn btn-primary" />
      </form>
      <br></br>
      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </div>
    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></script> */}

    </div>
  );
};

export default Register;