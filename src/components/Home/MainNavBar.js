import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainNavBar(props) {
  return (
    <div className='container py-10'>
      <div className='flex justify-between items-end'>
        <NavLink to="/" className="mr-6"><strong>Jashandeep Kaur</strong></NavLink>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className='mt-5'>
          <NavLink to="/about" className="mr-7">About</NavLink>
          <NavLink to="/blogs" className="mr-7">Blogs</NavLink>
          {/* <NavLink to="/learning" className="mr-7">Learn</NavLink> */}
          <NavLink to="/projects" className="mr-7">Projects</NavLink>
        </div>
      </div>
    </div>
  )
}
