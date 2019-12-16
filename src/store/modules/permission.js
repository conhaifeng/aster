import { const_router_map, async_router_map } from '@/router/router'

export default {
    namespaced: true,
    state: {
        routers: const_router_map /** 此用户全部可加载的路由，包含无权限和需要权限的路由 */ ,
        permissedRouters: [] /** 需要权限的路由，不包括无权限的路由 */ ,
    },
    getters: {
        routers: state => state.routers, // 全部可加载的路由
        permissedRouters: state => state.permissedRouters
    },
    mutations: {
        SET_ROUTES: (state, permissedRouters) => {
            state.permissedRouters = permissedRouters
            state.routers = const_router_map.concat(permissedRouters)
        }
    },
    actions: {
        generateRouters({ commit }, role) {
            return new Promise((resolve, reject) => {
                if (role)
            })
        }
    }
}