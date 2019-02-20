import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburgerbuilder-cf08a.firebaseio.com/'
});

export default instance;