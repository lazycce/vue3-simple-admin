import request from '@/utils/request'

/**
 * 
 * @returns 查询用户信息
 */
export function getUserInfo() {
    return request({
        url: '/getUserInfo',
        method: 'get',
    })
}