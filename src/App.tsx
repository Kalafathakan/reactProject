import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Bookings from './pages/Bookings';
import About from './pages/About';
import Footer from './pages/Footer';
import Navigation from './pages/Navigation';
import Orders from './pages/Orders';
import Reviews from './pages/Reviews';
import Deals from './pages/Deals';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Thankyou from './pages/Thankyou';

const App = () => {
  
  return (
    <div>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='menu' element={<Menu />} />
            <Route path='cart' element={<Cart />} />
            <Route path='bookings' element={<Bookings />} />
            <Route path='thankyou' element={<Thankyou />} />
            <Route path='orders' element={<Orders />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='about' element={<About />} />
            <Route path='deals' element={<Deals />} />
            <Route path='contact' element={<Contact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
    </div>
    
  );
};

export default App;