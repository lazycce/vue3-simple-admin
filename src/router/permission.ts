import { getToken } from '@/utils/auth'
import { useUserStore } from '@/stores/user'

const whiteList = ['/login', '/register']

export const createPermission = (options?: any) => {
    const { router, Nprogress }  = options

    const permission = {
        options,
        install: (app: any) => {
            router.beforeEach((to, from, next) => {
                const userStore = useUserStore()
                // 取token
                if (getToken()) {
                    Nprogress.start()
                    if (to.path === '/login') {
                        next({ path: '/' })
                        Nprogress.done()
                    } else {
                        if (userStore.roles.length === 0) {
                            userStore.queryUserInfo().then(res => {
                                next()
                                Nprogress.done()
                            }).catch(e => {
                                userStore.loginOut().then(res => {
                                    next({ path: '/' })
                                })
                            })
                        } else {
                            next()
                            Nprogress.done()
                        }
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
