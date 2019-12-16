const getters = {
    name: state => state.user.name,
    phone: state => state.user.phone,
    avatar: state => state.user.avatar,
    roles: state => state.user.roles,
    isLogined: state => state.user.isLogined,
    permissedRouters: state => state.permission.permissedRouters
}

export default getters