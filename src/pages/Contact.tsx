import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css'
import '../images/res.jpeg';

type Props = {};

const Contact = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="page-style">
      <div className="t-a">
        <h1>Contact Us</h1>
        <p><b>Send us your message and we will get back to you as soon as possible</b></p>
        <hr />
      </div>
      <div className="contact-form">
        <div className="contactrow-form">
          <div className="col-form">
            <img id="contact-img" src={require('../images/res.jpeg')} />
          </div>
          <div className="col-form">
            <form>
              <label>First Name</label>
              <input type="text" id="fname" name="fname" placeholder="Enter first name" />
              <label>Last Name</label>
              <input type="text" id="lname" name="lname" placeholder="Enter last name" />
              <label>Email</label>
              <input type="email" id="email" name="email" placeholder="Enter Email" />
              <label>Subject</label>
              <textarea id="email-subject" name="subject" placeholder="Write your message" ></textarea>
              <input id="submit" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
