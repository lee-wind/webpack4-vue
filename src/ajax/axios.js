import axios from 'axios'

let ip;
switch (SERVER_ENV) {
    case 'development':
        ip = "http://193.112.210.252:8080";
        break;
    case 'test':
        ip = "http://193.112.210.252:8080";
        break;
    case 'production':
        ip = 'http://10.169.6.79:8080';
        break;
}
let baseURL = ip + "/zhjf-v2/netZhjfCommon/requestNetZhjf";

export { baseURL };

axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(config => {
    return config;
});

axios.interceptors.response.use(response => {
    if(response.data.code === '404404' || response.data.result.errorCode === "9999"){
        alert(response.data.result.value);
        return Promise.reject();
    }
    return response.data;
});

export default axios;