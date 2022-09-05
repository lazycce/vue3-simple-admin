import { defineStore } from 'pinia'
import { getToken, setToken } from '@/utils/auth'
import type { LoginParams } from '@/model'
import { login } from '@/api/login'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    permissions: []
  }),
  getters: {
  },
  actions: {
    async login(loginParams: LoginParams) {
      const res = await login(loginParams)
      
      const { data } = res
      setToken(data.token)
    }
  }
})
