import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navbar'>
      
        <a id='navsec' className='navbarsection'>
          <NavLink to='/'>Home</NavLink>
        </a>
        <a id='navsec' className='navbarsection'>
          <NavLink to='/menu'>Menu</NavLink>
        </a>
        <a id='navsec' className='navbarsection'>
          <NavLink to='/bookings'>Bookings</NavLink>
        </a>
        <a id='navsec' className='navbarsection'>
          <NavLink to='/order'>Order</NavLink>
        </a>
        <a id='navsec' className='navbarsection'>
          <NavLink to='/about'>About</NavLink>
        </a>
        <a id='navsec' className='navbarsection'>
          <NavLink to='/contact'>Contact Us</NavLink>
        </a>
      
    </nav>
  );
};
export default Navigation;
