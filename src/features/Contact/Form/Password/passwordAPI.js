import axios from 'axios';

const url = 'http://localhost:5000/password';

export const fetchPassword = () => axios.get(url);
