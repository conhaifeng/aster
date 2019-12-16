import { const_router_map, async_router_map } from '@/router/router'

export default {
    namespaced: true,
    state: {
        routers: const_router_map /** 此用户全部可加载的路由，包含无权限和需要权限的路由 */ ,
        permissedRouters: [] /** 需要权限的路由，不包括无权限的路由 */ ,
    },
    getters: {
        routers: state => state.routers, // 全部可加载的路由
    },
    mutations: {
        SET_ROUTES: (state, permissedRouters) => {
            state.permissedRouters = permissedRouters
            state.routers = const_router_map.concat(permissedRouters)
        }
    },
    actions: {
        generateRouters({ commit }, roles) {
            return new Promise((resolve, reject) => {
                let routers = []
                if (roles.includes('admin')) {
                    routers = async_router_map
                } else {
                    routers = filterByRoles(roles, async_router_map)
                }

                commit('SET_ROUTES', routers)
                resolve()
            })
        }
    }
}

function filterByRoles(roles, routers) {
    if (roles.length === 0) {
        return []
    }

    return routers.filter(router => {
        if (hasPermission(roles, router)) {
            if (router.children && router.children.length) {
                router.children = filterByRoles(roles, router.children)
            }
            return true
        }

        return false
    })
}

function hasPermission(roles, router) {
    if (router.meta && router.meta.roles) {
        return roles.includes(router.meta.roles)
    }
    return true
}