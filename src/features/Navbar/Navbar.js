import React from 'react';
import './Navbar.css';
// import logo from '../../assets/images/LogoMkr.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const navOpen = () => {
      const navMenu = document.getElementById('nav_menu');
      const burger = document.getElementById('burger');
      navMenu.classList.toggle('open');
      burger.classList.toggle('open');
   };

   return (
      <nav className='nav'>
         <div className='container'>
            <div id='nav__logo' className='logo nav__logo'>
               <Link to='/'>
                  {/* <img src={logo} alt='' /> */}
                  <h3>LOGO</h3>
               </Link>
            </div>

            <div id='burger' className='burger' onClick={navOpen}>
               <div className='burger1'></div>
               <div className='burger2'></div>
               <div className='burger3'></div>
            </div>

            <div id='nav_menu' className='nav__menu'>
               <ul className='nav__links'>
                  <Link className='nav__link underline' to='/about'>
                     <li>About Me</li>
                  </Link>
                  <Link className='nav__link underline' to='/projects'>
                     <li>Projects</li>
                  </Link>
                  <Link className='nav__link underline' to='/contact'>
                     <li>Contact</li>
                  </Link>
                  <Link
                     className='nav__link'
                     to="../../assets/pdfs/vbhv4WebDevresume'.pdf"
                     target='_blank'
                     download
                  >
                     <li className='btn btn-ghost'>Resume'&darr;</li>
                  </Link>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
