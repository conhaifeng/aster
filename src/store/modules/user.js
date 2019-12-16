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
                getRoles().then(resp => {
                    const result = resp.data
                    if (!result) {
                        reject('Auth failed, pls login in.')
                    }

                    const { code, data } = result
                    if (code != "0000") {
                        reject("Auth failed, pls login in.")
                    }

                    commit("SET_ROLES", data.role)
                    resolve(data.role)
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