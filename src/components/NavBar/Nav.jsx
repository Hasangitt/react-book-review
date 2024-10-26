import { NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <div className="md:mr-20 md:ml-20 lg:mr-40 lg:ml-40">
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-white bg-base-100 border border-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/" className={({isActive}) => isActive ? "active" : '' } >
                <li>
                  <a>Home</a>
                </li>
              </NavLink>
              <NavLink to="/listed-books">
                <li>
                  <a>Listed Books</a>
                </li>
              </NavLink>
              <NavLink to="/pages-to-read">
                <li>
                  <a>Pages To Read</a>
                </li>
              </NavLink>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-black text-base md:text-xl">
            BanglaCode BookBar
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-black px-1">
            <NavLink to="/">
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink to="/listed-books">
              <li>
                <a>Listed Books</a>
              </li>
            </NavLink>
            <NavLink to="/pages-to-read">
              <li>
                <a>Pages To Read</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-5">
          <a className="btn btn-success">Sign In</a>
          <a className="btn btn-info">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
