import router from '@/router/router';
import NProgress from 'nprogress';
import store from '@/store'
import 'nprogress/nprogress.css'
import { getStorage } from '@/util/mixin'
import { CONST } from '@/util/constants'

const whiteList = ['/login'] // 无需跳转的白名单

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    if (getStorage(CONST.IS_LOGINED)) {
        if (store.getters.roles.length === 0) {
            try {
                const { roles } = await store.dispatch('user/getUserInfo')
                await store.dispatch('permission/generateRouters', roles)
                router.addRoutes(store.getters.permissedRouters)
                next({ ...to, replace: true })
            } catch (error) {
                next('/login')
                NProgress.done()
            }

        } else {
            if (to.matched.length) {
                next()
            } else {
                next({ path: '/404', replace: true })
            }
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