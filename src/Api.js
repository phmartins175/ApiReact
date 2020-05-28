import axios from 'axios';
import api from './Api';

const Api = axios.create({
    baseURL: 'http://localhost:5000/'

});

export default Api;