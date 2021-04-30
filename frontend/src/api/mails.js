import axios from '../utils/axios';

export default {
    callMe: userData => axios.post('/callMe', userData),
    sendDesign: userData =>
        axios.post('/sendDesign', userData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
};
