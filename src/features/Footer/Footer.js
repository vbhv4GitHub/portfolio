import React from 'react';
import './Footer.css';

const Footer = () => {
   return (
      <footer className='footer'>
         <div className='container'>
            <i
               className='fab fa-github fa-2x'
               onClick={() =>
                  window.open('https://github.com/vbhv4GitHub', '_blank')
               }
            ></i>
         </div>
      </footer>
   );
};

export default Footer;
