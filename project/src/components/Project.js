import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Project() {
  return (
    <div>
        Project
        <br />
        <NavLink to='/project/featured'>Featured Projects</NavLink>
        <NavLink to='/project/new'>New Projects</NavLink>
        <Outlet />
    </div>
    
  )
}

export default Project