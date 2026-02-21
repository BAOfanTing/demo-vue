
import axios, { AxiosRequestConfig, type AxiosResponse } from 'axios';
import { saveLocalStorage, getLocalStorage, clearLocalStorage } from './utils';
import Constants from '@/utils/constants';
import { ElMessage, ElMessageBox } from 'element-plus';

//token,需要与服务端对应
const TOKEN_NAME = 'token';

//创建Axios对象
const request = axios.create(
    {
        baseURL: import.meta.env.VITE_BASE_URL,
    }
)

//退出系统
function logout() {
    clearLocalStorage();
    location.href = '/';
}


//请求拦截器
request.interceptors.request.use(
    (config) => {
        //在发送请求之前消息头加入tokentoken
        const token = getLocalStorage(Constants.USER_TOKEN);
        if (token) {
            config.headers[TOKEN_NAME] = token;
        } else {
            delete config.headers[TOKEN_NAME];
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);


//响应拦截器
request.interceptors.response.use(
    (response) => {
        // 根据content-type，判断是否为json数据
        let contentType = response.headers['content-type'] ? response.headers['content-type'] : response.headers['Content-Type'];
        if (contentType.indexOf('application/json') === -1) {
            return Promise.resolve(response);
        }
        //如果返回的数据类型是Blob
        if (response.data && response.data instanceof Blob) {
            return Promise.reject(response.data);
        }
        const res = response.data;
        if (res.code && res.code !== 200) {
            //token`过期或者账号已在别处登录
            if (res.code == 11012 || res.code == 11011) {
                ElMessage.closeAll();
                ElMessage.error('您没有登录，请重新登录');
                setTimeout(logout, 300);
                return Promise.reject(response);
            }
            // 长时间未操作系统，需要重新登录
            if (res.code === 30001) {
                ElMessageBox.confirm('您需要重新登陆', '确认退出登录', {
                    confirmButtonText: '重新登陆',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    logout()
                })
                setTimeout(logout, 3000);
                return Promise.reject(response);
            }
            ElMessage.closeAll();
            if (res.message) {
                ElMessage.error(res.message);
            }
            return Promise.reject(res);
        } else {
            return Promise.resolve(res);
        }
    },
    (error: any) => {
        return Promise.reject(error);
    }
);


export const http = (config: AxiosRequestConfig<any>) => {
    return request.request(config);
}

export const get = (url: string, params: any) => {
    return http({
        url,
        method: 'get',
        params,
    })
}

export const post = (url: string, data: {}) => {
    return http({
        data,
        url,
        method: 'post',
    })
}
