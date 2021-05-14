import axios from 'axios';

const url = 'https://vbhv4991-portfolio-api.herokuapp.com/password';

export const fetchPassword = () => axios.get(url);
