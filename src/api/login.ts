import request from '@/utils/request'
import type { LoginParams } from '@/model'

/**
 * 登录
 * @param data 
 * @returns 
 */
export function login(data: LoginParams) {
    return request({
      url: '/login',
      headers: {
        isToken: false
      },
      method: 'post',
      data
    })
}