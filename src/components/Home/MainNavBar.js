import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainNavBar(props) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <NavLink to="/" className="mr-6">a</NavLink>
      </div>
      <div className="flex">
        <div>
          <NavLink to="/blogs" className="mr-6">Blogs</NavLink>
          <NavLink to="/learning" className="mr-6">Learn</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
