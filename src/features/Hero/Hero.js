import React from 'react';
import './Hero.css';
// import &rcub; Link } from 'react-router-dom';
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
                  <span className='blue'>function</span>
                  <span className='light-yellow'> main</span>
                  <span className='yellow'>(</span>
                  <span className='light-blue'>alive</span>
                  <span className='yellow'>) {' {'}</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className='light-blue'> eat</span>
                  <span className='pink'>(</span>
                  <span className='pink'>)</span>;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className='light-blue'> sleep</span>
                  <span className='pink'>(</span>
                  <span className='pink'>)</span>;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className='light-blue'> code</span>
                  <span className='pink'>(</span>
                  <span className='pink'>)</span>;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className='pink'>if (</span>
                  <span className='light-blue'>alive</span>
                  <span className='pink'>)</span>
                  <span className='light-yellow'> main</span>
                  <span className='pink'>(</span>
                  <span className='light-blue'>alive</span>
                  <span className='pink'>)</span>
                  ; <br />
                  <span className='yellow'>{'}'}</span>
               </h1>
               <button className='btn btn-neon btn-xs'>Read More</button>
            </div>
         </div>
      </section>
   );
};

export default Hero;
