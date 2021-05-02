import React, { useState, useEffect } from 'react';
import './Projects.css';
import Modal from '../Modal/Modal';
import AddProjectForm from './AddProjectForm/AddProjectForm';
import Project from './Project/Project';
import { useSelector } from 'react-redux';
import {
   FETCH_ALL_PROJECTS,
   selectProjects,
} from '../../features/projects/projectSlice';
import { useDispatch } from 'react-redux';
import { FETCH_PASSWORD } from '../../features/password/passwordSlice';
import { motion } from 'framer-motion';
import { variants } from '../PageTransitions/PageTransitions';

const Projects = () => {
   const projects = useSelector(selectProjects);
   const [searchTerm, setSearchTerm] = useState('');
   const [currentId, setCurrentId] = useState(null);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(FETCH_ALL_PROJECTS());
      dispatch(FETCH_PASSWORD());
   }, [currentId, dispatch]);
   // console.log(projects); // note: for debugging purposes only.
   const [isModalOpen, setIsModalOpen] = useState(false);

   return (
      <motion.section
         className='projects'
         initial='hidden'
         animate='visible'
         variants={variants}
      >
         <div className='container'>
            <h1 className='py-1em'>Projects</h1>
            <div className='search-box'>
               <input
                  type='text'
                  placeholder='Search by tags (HTML, CSS, MERN etc.)'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
               <i className='fas fa-search'></i>
            </div>
            <div id='cards' className='cards'>
               {!projects.length ? (
                  <div className='lds-facebook'>
                     <div></div>
                     <div></div>
                     <div></div>
                  </div>
               ) : (
                  projects.map((project) => {
                     if (searchTerm === '') {
                        return (
                           <Project
                              key={project._id}
                              project={project}
                              setCurrentId={setCurrentId}
                              setIsModalOpen={setIsModalOpen}
                           />
                        );
                     } else {
                        let terms = searchTerm.toLowerCase();
                        terms = terms.split(', ') || terms.split(',');
                        const lowercased = project.tags.map((tag) =>
                           tag.toLowerCase()
                        );
                        // const result = terms.every((val) => {
                        //    console.log(lowercased.includes(val));
                        //    return lowercased.includes(val);
                        // });

                        const result = terms.every(
                           (val) =>
                              !!lowercased.find((item) =>
                                 item.toLowerCase().includes(val.toLowerCase())
                              )
                        );
                        if (result)
                           return (
                              <Project
                                 key={project._id}
                                 project={project}
                                 setCurrentId={setCurrentId}
                                 setIsModalOpen={setIsModalOpen}
                              />
                           );
                        return null;
                     }
                  })
               )}
            </div>

            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
               <AddProjectForm
                  currentId={currentId}
                  setCurrentId={setCurrentId}
               />
            </Modal>

            <i
               id='addNewProjectBtn'
               className='fas fa-plus-circle fa-2x'
               onClick={() => setIsModalOpen(true)}
            ></i>
         </div>
      </motion.section>
   );
};

export default Projects;
