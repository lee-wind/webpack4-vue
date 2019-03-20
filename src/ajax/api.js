import store from '@/store/index'
import axios from './axios'
import { baseURL } from './axios'

let get = (code, data) => {
    return new Promise(resolve => {
        axios.get('', {
            params: Object.assign({
                code,
                time: new Date().getTime()
            },
                data
            ).then(res => {
                resolve(res)
            })
        })
    });
}

let post = (code, data) => {
    return new Promise(resolve => {
        $.ajax({
            url: baseURL,
            data: Object.assign({
                code,
            },
                data
            ),
            async: true,
            type: 'POST',
            crossDomain: true == !(document.all),
            success: function(res) {
                resolve(res);
            }
        });
    })
}

