import axios from 'axios';

const url = 'http://localhost:5000/contact';

export const sendMessage = (formData) => axios.post(url, formData);
