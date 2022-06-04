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
      </div>
    
  );
};

export default Home;
