import axios from 'axios'

let ip;
switch (SERVER_ENV) {
    case 'development':
        ip = "http://www.baidu.com";
        break;
    case 'test':
        ip = "http://www.bilibili.com";
        break;
    case 'production':
        ip = 'http://www.youku.com';
        break;
}
let baseURL = ip + "";

export { baseURL };

axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(config => {
    return config;
});

axios.interceptors.response.use(response => {
    return response.data;
});

export default axios;