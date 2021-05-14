import axios from 'axios';

const url = 'https://vbhv4991-portfolio-api.herokuapp.com/projects';

export const fetchProjects = () => axios.get(url);
export const addProject = (newProject) => axios.post(url, newProject);
export const updateProject = (id, updatedProject) =>
   axios.patch(`${url}/${id}`, updatedProject);
export const deleteProject = (id) => axios.delete(`${url}/${id}`);
