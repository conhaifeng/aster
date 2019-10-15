import App from '@/App'

const about_score = () => import("@/page/about/score")
const about_about = () => import("@/page/about/about")
const about_log = () => import("@/page/about/updatelog")
const about_feedback = () => import("@/page/about/feedback")
const settings_self = () => import("@/page/settings/self")
const settings_msg = () => import("@/page/settings/message")
const settings_safe = () => import("@/page/settings/safe")
const order_create = () => import("@/page/order/create_order")
const order_list = () => import("@/page/order/orderlist")
const login = () => import('@/page/login/login.vue')
const index = () => import("@/page/index")

export default [{
    path: '/',
    component: App,
    children: [{
            path: '',
            component: index
        }, {
            path:'/index',
            redirect:'/'
        },{
            path: '/login',
            component: login
        }, {
            path: '/order/create',
            component: order_create
        }, {
            path: '/order/list',
            component: order_list
        }, {
            path: '/settings/self',
            component: settings_self
        }, {
            path: '/settings/safe',
            component: settings_safe
        }, {
            path: '/settings/msg',
            component: settings_msg
        },
        {
            path: '/about/score',
            component: about_score
        }, {
            path: '/about/about',
            component: about_about
        }, {
            path: '/about/log',
            component: about_log
        }, {
            path: '/about/feedback',
            component: about_feedback
        }
    ]
}]