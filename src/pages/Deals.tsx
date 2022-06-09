import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Deals = (props: Props) => {
/*   const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }; */
  return (
    <div className='page-style'>
      <h1>Deals & Promotions</h1>

      <span>
        <h4><u>Images coming soon!</u></h4>
        <ol>
          <li>Monday: <strong>Lunch Deal!!</strong> Tacos and a Pint for <strong>$12.99</strong></li>
          <li>Friday: <strong>End of Week Deal!!</strong> Tacos and a Pint for <strong>$12.99</strong></li>
          <li>After 8pm every night: Nachos only <strong>$5.99</strong> with purchase of a drink!</li>
        </ol>
      </span>
    </div>
  );
};

export default Deals;
