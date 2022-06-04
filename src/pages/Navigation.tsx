import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul id='dashboard'>
        <li id='sections'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li id='sections'>
          <NavLink to='/menu'>Menu</NavLink>
        </li>
        <li id='sections'>
          <NavLink to='/bookings'>Bookings</NavLink>
        </li>
        <li id='sections'>
          <NavLink to='/order'>Order</NavLink>
        </li>
        <li id='sections'>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li id='sections'>
          <NavLink to='/contact'>Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
