import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';

type Props = {}

const Register = (props: Props) => {


  const [emailFromForm, setEmail] = useState("");

  const [passwordFromForm, setPassword] = useState("");

  const handleChangeForEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setEmail(e.target.value);
  };

  const handleChangeForPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //by default it will submit the form, so prevent
    e.preventDefault();
    sendPostRequest();
    // setEmail('')
    //setPassword('')
  };

  const sendPostRequest = async () => {
    try {
      const response = await axios.post(
        'https://shielded-depths-40144.herokuapp.com/registration',
        {
          email: emailFromForm,
          password: passwordFromForm
        }
      );

      console.log(response);
      if (response.status.toString() === "201") {
        console.log("you signup successfully")
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="center">
      <h1>Sign Up</h1>
      <p><b>Create Your Account</b></p>
      <form className="loginBox" onSubmit={handleSubmit}>

        <div>
          <input
            type="email"
            className="form-control"
            placeholder='Email Address'
            value={emailFromForm}
            onChange={handleChangeForEmail}
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend" required />

        </div>
        <div>
          <input
            type="password"
            placeholder='Password'
            value={passwordFromForm}
            onChange={handleChangeForPassword}
            className="form-control"
            id="validationCustom03" required />

        </div>
        <input type='submit' value='Register' />
      </form>
      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </div>
  );
};

export default Register;