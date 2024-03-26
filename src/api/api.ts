import axios from 'axios'

import Cookies from 'js-cookie';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

api.interceptors.response.use(function (response) {
    return response;
}, ((error) => {
    if (401 === error.response.status) {
        Cookies.remove('token');
        Cookies.remove('user');
        Cookies.remove('permissions');

        window.location.href = '/';

    } else if (403 === error.response.status) {
        window.location.href = '/forbidden';
    } else {
        return Promise.reject(error);
    }
}));


export default api