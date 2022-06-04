import React from 'react';

type Props = {};

const Register = (props: Props) => {

  return (
    <div className='page-style'>
      <h1>Register your account</h1>
      <form method='POST'>
        <p>Enter Email:</p><input type="text" id="email" name="email" />
        <p>Enter Password:</p><input type="text" id="password" name="password" />
        <p>Confirm Password:</p><input type="text" id="confirmPassword" name="confirmPassword" /><hr></hr>
        <input type="submit" value="Submit"/>
        <input type="reset" value="Clear"/>
      </form>
    </div>
  );
};

export default Register;
