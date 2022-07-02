import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
type Props = {}

type State = {}

export default class AdminNavigation extends Component<Props, State> {
  state = {}

  render() {
    return (
        <div>
      
      <header className=" bg-dark text-white col-5">
    <div className="container p-1 row  ">
      {/* <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"> */}
      <div className='col-7'>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
          <li><NavLink to="/task-list" className="nav-link px-2 text-white">Task List</NavLink></li>

          <li><NavLink to="/menu" className="nav-link px-2 text-white">Menu</NavLink></li>
          <li><NavLink to="/post" className="nav-link px-2 text-white">Post</NavLink></li>
          <li><NavLink to="/todo" className="nav-link px-2 text-white">ToDo</NavLink></li>
          <li><NavLink to="/about" className="nav-link px-2 text-white">About</NavLink></li>
        </ul>
 </div>
 <div className='col-5'>
        <div className=" me-0  ">
          <NavLink to="/login"  type="button" className="btn btn-outline-light me-2">Login</NavLink>
          <NavLink to="/register" type="button" className="btn btn-warning">Register</NavLink>
        </div>
      </div>
    </div>
  </header>
      </div>
    )
  }
}