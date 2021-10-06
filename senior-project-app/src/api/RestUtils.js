import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:9191"
});

instance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            config.headers["Authorization"] = token;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;
