import Axios from 'axios';
import books from './services/books';

const api = {
  books
};

export const client = Axios.create({
  baseURL: 'http://nyx.vima.ekt.gr:3000/api'
});


export default api;