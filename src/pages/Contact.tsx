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
    <div className="container-form">
      <div className="t-a">
        <h2>Contact Us</h2>
        <p>Swing by for a cup of coffee, or feel free to leave us a message:</p>
      </div>
      <div className="row-form">
        <div className="column-form">
          <img id="contact-img" src={require('../images/res.jpeg')} />
        </div>
        <div className="column-form">
          <form>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email.." />
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
