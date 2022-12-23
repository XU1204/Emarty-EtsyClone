import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
    };
    useEffect(() => {
      if (!showMenu) return;

      const closeMenu = () => {
          setShowMenu(false);
      };

      document.addEventListener('click', closeMenu);

      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const user = useSelector(state => Object.values(state.session)[0])

    let content
    if (!user) {
        content = (
          <div className='navbar-right'>
            <div>
              <NavLink style={{ color: 'black', textDecoration: 'none'}} to='/login' exact={true} activeClassName='active'>
                <button className='navbar-button'>Login</button>
              </NavLink>
            </div>
            <div>
              <NavLink style={{ color: 'black', textDecoration: 'none'}} to='/sign-up' exact={true} activeClassName='active'>
                <button className='navbar-button'>Sign Up</button>
              </NavLink>
              </div>
          </div>
        )
    } else {
      content = (
        <div className='navbar-right'>
            <div>
              <NavLink style={{ color: 'black', textDecoration: 'none'}} to='/products/current' exact={true} activeClassName='active'>
                <button className='navbar-button'><i class="fa-solid fa-store"></i></button>
              </NavLink>
            </div>
            <div>
              <button className='navbar-button' onClick={openMenu}>
                <i className="fa-solid fa-user"></i> {"  "}
                <i class="fa-solid fa-caret-down"></i>
              </button>
              {showMenu && (
                <ul className="profile-dropdown">
                  <li>{user.username}</li>
                  <li>{user.email}</li>
                  <li>
                    <NavLink style={{ color: 'black'}} key='review' to='/'><i class="fa-regular fa-clipboard"></i>My Reviews</NavLink>
                  </li>
                  <li>
                    <LogoutButton />
                  </li>
                </ul>
              )}
          </div>
          <div>
            <NavLink style={{ color: 'black', textDecoration: 'none'}} to='/sign-up' exact={true} activeClassName='active'>
              <button className='navbar-button'><i class="fa-solid fa-cart-shopping"></i></button>
            </NavLink>
          </div>
        </div>
      )
    }


  return (
    <nav>
      <div className='navbar-container'>
        <div>
          <NavLink style={{ color: 'black', textDecoration: 'none'}} to='/' exact={true} activeClassName='active'>
            <p id='logo'>Emart</p>
          </NavLink>
        </div>
        {content}
      </div>
    </nav>
  );
}

export default NavBar;
