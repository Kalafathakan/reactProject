import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Contact = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className='page-style'>
      <h1>Contact Us</h1>
      <p>Please feel free to send an email for bookings and other inquiries</p>
      <a href = "mailto:kalafatzaferhakan@gmail.com">Send Email</a>
      <br></br><hr></hr>
      <button onClick={handleClick}>Go home</button>
    </div>
  );
};

export default Contact;
