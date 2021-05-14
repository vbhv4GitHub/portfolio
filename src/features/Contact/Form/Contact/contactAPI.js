import axios from 'axios';

const url = 'https://vbhv4991-portfolio-api.herokuapp.com/contact';

export const sendMessage = (formData) => axios.post(url, formData);
