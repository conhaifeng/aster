import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)


export const const_router_map = [{
        path: '/test',
        component: () => import('@/page/test/test'),
        name: 'test',
        hidden: true
    }, {
        path: '/login',
        component: () => import('@/page/login/login'),
        name: 'login',
        hidden: true
    }, {
        path: '/401',
        component: () => import('@/page/erro-page/401'),
        name: '401page',
        hidden: true
    }, {
        path: '/404',
        component: () => import('@/page/erro-page/404'),
        name: '404page',
        hidden: true
    }, {
        path: '',
        redirect: '/index',
        hidden: true
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/layout/index'),
        meta: {
            title: '首页'
        }
    }, {
        path: '/account',
        name: 'account',
        component: () => import('@/layout/index'),
        meta: {
            title: '账户信息'
        },
        children: [{
            path: 'safeInfo',
            name: 'safeInfo',
            component: () => import('@/page/settings/safe'),
            meta: {
                title: '安全管理'
            }
        }, {
            path: 'individualInfo',
            name: 'individualInfo',
            component: () => import('@/page/settings/self'),
            meta: {
                title: '个人信息'
            }
        }, {
            path: 'message',
            name: 'message',
            component: () => import('@/page/settings/message'),
            meta: {
                title: '消息设置'
            }
        }]
    }

]

export const async_router_map = [{
    path: '/user',
    component: () => import('@/page/login/login'),
    name: 'userManage',
    meta: {
        title: '用户管理',
        roles: ['admin']
    },
    children: [{
        path: 'permission',
        name: 'permission',
        component: () => import('@/page/login/login'),
        meta: {
            title: '权限管理',
            roles: ['admin']
        }
    }, {
        path: 'userinfo',
        name: 'userInfo',
        component: () => import('@/page/login/login'),
        meta: {
            title: '用户信息',
            roles: ['admin']
        }
    }]
}, {
    path: '/order',
    component: () => import("@/page/login/login"),
    meta: {
        title: '订单管理',
        roles: ['admin', 'order']
    },
    children: [{
        path: 'myOrder',
        component: () => import('@/page/login/login'),
        meta: {
            title: '我的订单',
            roles: ['admin', 'order']
        }
    }, {
        path: 'create',
        component: () => import('@/page/login/login'),
        meta: {
            title: '创建订单',
            roles: ['admin', 'order']
        }
    }]
}]

export default new Router({
    mode: 'history',
    routes: const_router_map
})