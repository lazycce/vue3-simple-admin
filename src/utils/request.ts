import axios from 'axios'

const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: import.meta.env.VITE_BASE_URL,
    // 超时
    timeout: 10000
})

/**
 * 请求拦截
 */
service.interceptors.request.use((config) => {
    return config
})

/**
 * 响应拦截
 */
service.interceptors.response.use((res) => {
    return res.data
})

export default service