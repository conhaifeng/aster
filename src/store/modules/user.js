import { getUserInfo, login, logout } from '@/api/user'
import { Promise, reject } from 'q';
import { getStorage, setStorage, removeStorage } from '@/util/mixin'
import { CONST } from '@/util/constants'

export default {
    namespaced: true,
    state: {
        name: '',
        phone: '',
        avatar: '',
        roles: [],
    },
    mutations: {
        SET_USERINFO: (state, userInfo) => {
            state.name = userInfo.username
            state.phone = userInfo.phone
            state.roles = userInfo.roles
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
        }

    },
    actions: {
        login: ({ commit }, accountInfo) => {
            return new Promise((resolve, reject) => {
                login(accountInfo).then((resp) => {
                    const { data } = resp //参数解构
                    if (data.code === "0000") {
                        let userInfo = data.data
                        commit("SET_NAME", userInfo.username)
                        commit('SET_PHONE', userInfo.phone)
                        setStorage(CONST.IS_LOGINED, true)
                        resolve()
                    }
                    reject(data.message)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getUserInfo: ({ commit }) => {
            return new Promise((resolve, reject) => {
                getUserInfo().then(resp => {
                    const result = resp.data
                    if (!result) {
                        reject('Auth failed, pls login in.')
                    }

                    const { code, data } = result
                    if (code != "0000") {
                        reject("Auth failed, pls login in.")
                    }

                    commit("SET_USERINFO", data)
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
                    removeStorage(CONST.IS_LOGINED)
                    resolve()
                })
            })
        }
    }
}