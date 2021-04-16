import axios from '../utils/axios';

export default {
    callMe: userData => axios.post('/callMe', userData)
};
