import request from '@/utils/request'
import type { LoginParams } from '@/model'

// 获取路由
export function getRouters() {
    return request({
        url: '/getRouters',
        method: 'get'
    })
}