import axios from 'axios';

const url = 'http://localhost:5000/projects';

export const fetchProjects = () => axios.get(url);
export const addProject = (newProject) => axios.post(url, newProject);
export const updateProject = (id, updatedProject) =>
   axios.patch(`${url}/${id}`, updatedProject);
export const deleteProject = (id) => axios.delete(`${url}/${id}`);
