const about_score = () => import("../page/about/score.vue")
const about_about = () => import("../page/about/about.vue")
const about_log = () => import("../page/about/updatelog.vue")
const about_feedback = () => import("../page/about/feedback.vue")
const settings_self = () => import("../page/settings/self.vue")
const settings_msg = () => import("../page/settings/message.vue")
const settings_safe = () => import("../page/settings/safe.vue")

export default [{
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