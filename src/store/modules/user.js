import { getRoles, login, logout } from '@/api/user'
import { Promise, reject } from 'q';

export default {
    namespaced: true,
    state: {
        name: '',
        phone: '',
        avatar: '',
        roles: [],
        isLogined: false
    },
    getters: {
        name: state => state.name,
        phone: state => state.phone,
        avatar: state => state.avatar,
        roles: state => state.roles,
        isLogined: state => state.isLogined
    },
    mutations: {
        SET_USERINFO: (state, userInfo) => {
            state.name = userInfo.username
            state.phone = userInfo.phone
            state.isLogined = true
            // state.avatar = userInfo.avatar
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_PHONE: (state, phone) => {
            state.phone = phone
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_LOGIN: (state, logined) => {
            state.isLogined = logined
        }
    },
    actions: {
        login: ({ commit }, accountInfo) => {
            return new Promise((resolve, reject) => {
                login(accountInfo).then((resp) => {
                    const { data } = resp //参数解构
                    if (data.code === "0000") {
                        let userInfo = data.data
                        commit("SET_USERINFO", userInfo)
                        resolve()
                    }
                    reject(data.message)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getRoles: ({ commit }) => {
            return new Promise((resolve, reject) => {
                getRoles().then(res => {
                    let data = res.data

                    if (res.code != "0000" || !data) {
                        reject("Auth failed, pls login in.")
                    }

                    commit("SET_ROLES", data.roles)
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        logout: ({ commit }) => {
            return new Promise((resolve, reject) => {
                logout().then(resp => {
                    commit('SET_NAME', '')
                    commit('SET_PHONE', '')
                    commit('SET_ROLES', [])
                    commit('SET_LOGIN', false)
                    resolve()
                })
            })
        }
    }
}