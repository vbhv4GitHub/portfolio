import React from 'react';
import moment from 'moment';
// import matrix from '../../../assets/images/matrix.jpg';

const Project = ({ project, setCurrentId, setIsModalOpen }) => {
   return (
      <>
         <div className='card'>
            <img className='card__img' src={project.image} alt='' />
            <p>
               <i className='far fa-clock'></i>
               {moment(project.addedAt).fromNow()}
            </p>
            <div className='card__img-overlay'>
               <h3 className='card__title'>{project.title}</h3>
               <p className='card__tags'>
                  {project.tags.map((tag) => `#${tag} `)}
               </p>
               <div className='card__links'>
                  <i
                     className='fab fa-github fa-2x'
                     onClick={() => window.open(`${project.github}`, '_blank')}
                  ></i>
                  <i
                     className='fas fa-binoculars fa-2x'
                     onClick={() => window.open(`${project.link}`, '_blank')}
                  ></i>
                  <i
                     className='far fa-edit fa-2x'
                     onClick={() => {
                        setCurrentId(`${project._id}`);
                        setIsModalOpen(true);
                     }}
                  ></i>
               </div>
            </div>
         </div>
      </>
   );
};

export default Project;
