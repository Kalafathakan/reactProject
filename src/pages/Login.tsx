import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Login = (props: Props) => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate('/');
  // };
  return (
    <div className='page-style'>
      <h1>Log In</h1>
      <form method='POST'>
        <p>Enter Email:</p><input type="text" id="email" name="email" />
        <p>Enter Password:</p><input type="text" id="password" name="password" />
        <hr></hr>
        <input type="submit" value="Submit"/>
        <input type="reset" value="Clear"/>
      </form>
    </div>
  );
};

export default Login;
