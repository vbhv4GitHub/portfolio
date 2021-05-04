import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import './AddProjectForm.css';
import { useDispatch, useSelector } from 'react-redux';

import bcrypt from 'bcryptjs';
import { ADD_PROJECT, UPDATE_PROJECT } from '../projectSlice';

const AddProjectForm = ({ currentId, setCurrentId }) => {
   const passwordData = useSelector((state) => state.password);

   const project = useSelector((state) =>
      currentId ? state.projects.find((p) => p._id === currentId) : null
   );
   const dispatch = useDispatch();
   const [password, setPassword] = useState('');
   const [projectData, setProjectData] = useState({
      title: '',
      tags: '',
      github: '',
      link: '',
      image: '',
   });

   useEffect(() => {
      if (project) setProjectData(project);
   }, [project, passwordData]);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (currentId) {
         dispatch(UPDATE_PROJECT({ id: currentId, data: projectData }));
      } else {
         dispatch(ADD_PROJECT(projectData));
      }
      clear();
   };

   const clear = () => {
      setCurrentId(null);
      setProjectData({
         title: '',
         tags: '',
         github: '',
         link: '',
         image: '',
      });
      setPassword('');
   };

   // console.log(passwordData[0]); // note: for debuggin purposes only.

   const retrievePassword = () => {
      if (passwordData[0] !== undefined) {
         return bcrypt.compareSync(password, passwordData[0].password);
      } else {
         return false;
      }
   };
   return (
      <div>
         <form className='addProjectForm' onSubmit={handleSubmit}>
            <h2>{currentId ? 'Edit' : 'Add'} Project</h2>
            <input
               required
               type='text'
               name='title'
               placeholder='Title'
               value={projectData.title}
               onChange={(e) =>
                  setProjectData({ ...projectData, title: e.target.value })
               }
            />
            <input
               required
               type='text'
               name='tags'
               placeholder='Tags(HTML,CSS,Javascript)'
               value={projectData.tags}
               onChange={(e) => {
                  let tempStr = e.target.value.replace(' ', '');
                  setProjectData({
                     ...projectData,
                     tags: tempStr.split(','),
                  });
               }}
            />
            <input
               required
               type='text'
               name='github'
               placeholder='Github Link'
               value={projectData.github}
               onChange={(e) =>
                  setProjectData({ ...projectData, github: e.target.value })
               }
            />
            <input
               required
               type='text'
               name='link'
               placeholder='Live Project Link'
               value={projectData.link}
               onChange={(e) =>
                  setProjectData({ ...projectData, link: e.target.value })
               }
            />

            <input
               required
               type='password'
               name='password'
               placeholder='Password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            {password === '' ? (
               <p>Please fill in correct password to enable submission.</p>
            ) : retrievePassword() ? (
               <p className='valid'>Correct Password!!!</p>
            ) : (
               <p>Wrong Password!!!</p>
            )}

            <FileBase
               type='file'
               multiple={false}
               onDone={({ base64 }) =>
                  setProjectData({ ...projectData, image: base64 })
               }
            />
            {/* <input type='file' id='img' name='img' accept='image/*' /> */}
            <button
               type='submit'
               className='btn btn-primary btn-fullWidth btn-lg'
               disabled={retrievePassword() ? false : true}
            >
               Submit
            </button>
            <button
               type='reset'
               className='btn btn-secondary btn-fullWidth'
               onClick={clear}
            >
               Clear
            </button>
         </form>
      </div>
   );
};

export default AddProjectForm;
