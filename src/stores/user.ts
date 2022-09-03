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
    async login(params: LoginParams) {
      const res = await login({
        username: '123',
        password: '213',
        code: '123'
      })
      
      const { data } = res
      setToken(data.token)
    }
  }
})
