import router from '@/router/router';
import NProgress from 'nprogress';
import store from '@/store'
import 'nprogress/nprogress.css'

const whiteList = ['/login'] // 无需跳转的白名单

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    if (store.getters.isLogined) {

        if (store.getters.roles.length === 0) {
            try {
                const roles = await store.dispatch('user/getRoles')
                await store.dispatch('permission/generateRouters', roles)
                router.addRoutes(store.getters.permissedRouters)
                next({ ...to, replace: true })
            } catch (error) {
                console.log(error)
                next('/login')
                NProgress.done()
            }

        } else {
            // if (hasPermission(store.user.roes))
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
            NProgress.done()
        }
    }
})

router.afterEach((to, from) => {
    NProgress.done()
})