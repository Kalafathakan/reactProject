import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const About = (props: Props) => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate('/');
  // };
  return (
    <div className='page-style'>
      <h1>Frequently asked questions</h1>
      <p>Question 1</p><br></br>
      <p>Question 2</p>
      <p>add javascript functions when question clicked drop down the answer</p>
      <br></br>
      <p>Please feel free to send an email if you have any further questions</p>
      <a href = "mailto:kalafatzaferhakan@gmail.com">Send Email</a>
      <br></br><hr></hr>
      <p>maybe add buttons for handling routers comes in your mind or links. you can use the handler commented above the code</p>
    </div>
  );
};

export default About;
