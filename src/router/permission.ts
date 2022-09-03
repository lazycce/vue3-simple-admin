import { getToken } from '@/utils/auth'

const whiteList = ['/login', '/register']

export const createPermission = (options?: any) => {
    const { router, Nprogress }  = options

    const permission = {
        options,
        install: (app: any) => {
            router.beforeEach((to, from, next) => {
                // 取token
                if (getToken()) {
                    Nprogress.start()
                    if (to.path === '/login') {
                        next({ path: '/' })
                        Nprogress.done()
                    } else {
                        next()
                        Nprogress.done()
                    }
                } else {
                    if(whiteList.includes(to.path)) {
                        next()
                        Nprogress.done()
                    } else {
                        next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
                        Nprogress.done()
                    }
                }
            })
        }
    }

    return permission
}
