import React from 'react';
import './Hero.css';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { variants } from '../PageTransitions/PageTransitions';

const Hero = () => {
   return (
      <section className='hero'>
         <div id='hero__background'>
            <div className='background__overlay'></div>
         </div>
         <div className='container'>
            <div className='hero__image'></div>
            <div className='hero__intro'>
               <h1>
                  Full-Stack
                  <br />
                  <span>Web Developer</span>
               </h1>
               <button className='btn btn-neon btn-xs'>Read More</button>
            </div>
         </div>
      </section>
   );
};

export default Hero;
