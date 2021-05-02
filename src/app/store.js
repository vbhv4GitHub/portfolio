import { configureStore } from '@reduxjs/toolkit';
import password from '../features/Contact/Form/Password/passwordSlice';
import projects from '../features/Portfolio/Projects/projectSlice';

export default configureStore({
   reducer: {
      projects: projects,
      password: password,
   },
});
