import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './HomeNavigation';
import Register from './Register';
import Login from './Login';


const Home = () => {

  return (
    
      <div className='page-style'>
        <h2>Home</h2><hr></hr>
        <div id='homeroutes'>
          <Navigation />
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <div id='homeInfo'>
          <h3>Address</h3>
          <p>205 Humber College Blvd, Etobicoke, ON M9W 6V3</p>
          <h3>Hours Of Operation</h3>
          <ul>
            <li>
              Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Noon - Midnight
            </li>
            <li>
              Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Noon - Midnight
            </li>
            <li>
              Wednesday &nbsp;    Noon - Midnight
            </li>
            <li>
              Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Noon - Midnight
            </li>
            <li>
              Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Noon - 1AM
            </li>
            <li>
              Saturday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Noon - 1AM
            </li>
            <li>
              Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Noon - 11PM
            </li>
          </ul>
        </div>
      </div>
    
  );
};

export default Home;
