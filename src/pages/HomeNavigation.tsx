import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul id='homeroutes'>
        <li id='homesections'>
          <h3><NavLink to='/register'>Register an account</NavLink></h3>
        </li>
        <li id='homesections'>
          <h3><NavLink to='/login'>Log in</NavLink></h3>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
