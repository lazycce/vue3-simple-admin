import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getCookie(key: string) {
  return Cookies.get(key)
}

export function setCookie(key: string, value: any) {
  return Cookies.set(key, value)
}

export function removeCookie(key: string) {
  return Cookies.remove(key)
}