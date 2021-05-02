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
            <h1>About Me</h1>
            <p>
               I love developing websites, and I'm an aspiring MERN stack
               developer. I have been creating websites since November 2020 and
               have some work experience with WordPress development. Currently,
               I'm looking for a job or an internship for full stack
               development.
               <br />
               <br />I don't have a college degree but that doesn't matter much
               to me. I believe everything is changing. And all I know for sure
               is to never stop learning and having curiosity.
            </p>

            <Link
               className='btn btn-ghost'
               to="../../assets/pdfs/vbhv4WebDevresume'.pdf"
               target='_blank'
               download
            >
               Resume'&darr;
            </Link>
         </div>
      </section>
   );
};

export default About;
