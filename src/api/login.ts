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

/**
 * 退出
 */
export function loginOut() {
  return request({
    url: '/loginOut',
    method: 'post',
  })
}