import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './projectsAPI';

export const FETCH_ALL_PROJECTS = createAsyncThunk(
   'projects/fetchProjects',
   async () => {
      try {
         const response = await api.fetchProjects();
         return response.data;
      } catch (error) {
         console.log(error.message);
      }
   }
);

export const ADD_PROJECT = createAsyncThunk(
   'projects/addProject',
   async (project) => {
      try {
         const response = await api.addProject(project);
         return response.data;
      } catch (error) {
         console.log(error.message);
      }
   }
);

export const UPDATE_PROJECT = createAsyncThunk(
   'projects/updateProject',
   async (userData) => {
      const { id, data } = userData;
      try {
         const response = await api.updateProject(id, data);
         return response.data;
      } catch (error) {
         console.log(error.message);
      }
   }
);

export const DELETE_PROJECT = createAsyncThunk(
   'projects/deleteProject',
   async (id) => {
      try {
         await api.deleteProject(id);
         return id;
      } catch (error) {
         console.log(error.message);
      }
   }
);

export const projectSlice = createSlice({
   name: 'projects',
   initialState: [],
   reducers: {},
   extraReducers: {
      [FETCH_ALL_PROJECTS.fulfilled]: (state, action) => {
         return action.payload;
      },
      [ADD_PROJECT.fulfilled]: (state, action) => {
         return [...state, action.payload];
      },
      [UPDATE_PROJECT.fulfilled]: (state, action) => {
         return state.map((project) => {
            if (project._id === action.payload._id) {
               return action.payload;
            } else {
               return project;
            }
         });
      },
      [DELETE_PROJECT.fulfilled]: (state, action) => {
         return state.filter((project) => project._id !== action.payload);
      },
   },
});

export const selectProjects = (state) => state.projects;
export const { FETCH_PROJECT } = projectSlice.actions;
export default projectSlice.reducer;
