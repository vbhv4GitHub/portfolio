import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { variants } from '../PageTransitions/PageTransitions';

const About = () => {
   return (
      <motion.section
         className='about'
         initial='hidden'
         animate='visible'
         variants={variants}
      >
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
               className='btn btn-ghost btn-square'
               to="../../assets/pdfs/vbhv4WebDevresume'.pdf"
               target='_blank'
               download
            >
               Resume'&darr;
            </Link>
         </div>
      </motion.section>
   );
};

export default About;
