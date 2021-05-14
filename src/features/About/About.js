import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
   return (
      <section className='about'>
         <div id='about__background'>
            <div className='background__overlay'></div>
         </div>
         <div className='container'>
            <div className='title'>
               <h1>About Me</h1>
            </div>
            <p>
               Hi, I'm Vaibhav, a MERN stack web developer, and a passionate
               coder. I got into coding when I was sixteen. One could say that
               C++ is my first love.{' '}
            </p>
            <br />
            <p>
               In the year 2020, I got hired for the job of WordPress developer
               at a local IT firm. That's when I realized how fun web
               development could be. Since then, I'm on my path to master coding
               websites. I love to solve problems. Maybe that's why I love to
               play chess and solve sudoku puzzles.{' '}
            </p>
            <br />

            <p>
               I understand that in this industry, being omniscient is
               impossible. There is always something new for me, and it will
               always be that way. I'm willing to learn more, take my skills to
               the next level. Ergo, I'm seeking a web developer position, which
               could be an internship to grow my career.{' '}
            </p>
            <div>
               <Link to='/contact'>
                  <button className='btn btn-lg btn-primary'>
                     Get in touch
                  </button>
               </Link>
               <Link to='/assets/pdfs/vbhvResume.pdf' target='_blank' download>
                  <button className='btn btn-lg btn-secondary'>
                     Resume'&darr;
                  </button>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default About;
