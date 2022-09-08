import { defineStore } from 'pinia'
import { getToken, setToken, removeToken } from '@/utils/auth'
import type { LoginParams } from '@/model'
import { login, loginOut} from '@/api/login'
import { getUserInfo } from '@/api/system/user'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: getToken(),
    name: '',
    avatar: '',
    roles: [] as Array<string>,
    permissions: [] as Array<string>
  }),
  getters: {
  },
  actions: {
    async login(loginParams: LoginParams) {
      const res = await login(loginParams)
      const { data } = res
      setToken(data.token)
    },

    async queryUserInfo() {
      const res = await getUserInfo()
      const { name, avatar, roles, permissions } = res.data
      this.name = name
      this.avatar = avatar
      this.roles.push(...roles)
      this.permissions.push(...permissions)
    },

    loginOut() {
      return new Promise((resolve, reject) => {
        loginOut().then(res => {
          this.token = ''
          this.roles = []
          this.permissions = []
          removeToken()
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      }) 
    }
  }
})
