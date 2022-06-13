import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './FooterNavigation';
import FAQ from './FAQ';
import Reviews from './Reviews';
import Deals from './Deals';

const Footer = () => {
  return (
    <div className='footer-dark'>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-md-3 item'>
             
              <Navigation />
              <Routes>
                <Route path='/faq' element={<FAQ />} />
                <Route path='/reviews' element={<Reviews />} />
                <Route path='/deals' element={<Deals />} />
              </Routes>
            </div>
            <div className='col-md-6 item text'><br></br>
              <h3>Group Members</h3>
              <li>
                Zafer Hakan Kalafat
              </li>
              <li>
                Guray Demirezen
              </li>
              <li>
                Vishnu Pillai
              </li>
              <li>
                Nicholas Keller-Sedan
              </li>
              <li>
                Oreoluwa Lawal
              </li>
            </div>
          </div>
          <p className='copyright'>Falcons ltd.© 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
