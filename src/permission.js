import router from '@/router/router';
import NProgress from 'nprogress';
import store from '@/store'
import 'nprogress/nprogress.css'

const whiteList = ['/login'] // 无需跳转的白名单

router.beforeEach((to, from, next) => {
    NProgress.start()

    if (store.user.isLogined) {
        if (store.user.roles.length === 0) {
            const userRoles = await store.dispatch('user/getRoles')

        } else {
            // if (hasPermission(store.user.roes))
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