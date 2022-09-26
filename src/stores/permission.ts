import { defineStore } from 'pinia'
import { getRouters } from '@/api/menu'
import _ from 'lodash'

export const usePermissionStore = defineStore({
    id: 'permission',
    state: () => ({
        sidebarRouters: []
    }),
    getters: {
    },
    actions: {
        generateRoutes() {
            return new Promise((resolve, reject) => {
                getRouters().then(res => {
                    console.log(res)
                    const rdata = _.cloneDeep(res.data)
                    const sdata = _.cloneDeep(res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
})

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap, lastRouter = false, type = false) {
    return asyncRouterMap.filter(route => {
      if (type && route.children) {
        route.children = filterChildren(route.children)
      }
      if (route.component) {
        // Layout ParentView 组件特殊处理
        if (route.component === 'Layout') {
          route.component = Layout
        } else if (route.component === 'ParentView') {
          route.component = ParentView
        } else if (route.component === 'InnerLink') {
          route.component = InnerLink
        } else {
          route.component = loadView(route.component)
        }
      }
      if (route.children != null && route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, route, type)
      } else {
        delete route['children']
        delete route['redirect']
      }
      return true
    })
  }