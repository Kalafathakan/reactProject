import { Routes, Route } from 'react-router-dom';
import './App.css';
import {useState} from 'react';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import About from './pages/About';
import Footer from './pages/Footer';
import Navigation from './pages/Navigation';
import Order from './pages/Order';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import MenuAPI from './components/MenuAPI';

const App = () => {
  
  return (
    <div>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='menu' element={<MenuAPI />} />
            <Route path='bookings' element={<Bookings />} />
            <Route path='order' element={<Order />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
    </div>
    
  );
};

export default App;