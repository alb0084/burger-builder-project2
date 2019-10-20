import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger2-d354b.firebaseio.com/'
});

export default instance;