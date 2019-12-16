import axios from '@/util/axios'

export function login(data) {
    return axios.post("/login", data)
}

export function logout() {
    return axios.get('/logout')
}

export function getRoles() {
    return axios.get("/users/permission")
}

export function changePassword(data) {
    return axios.post('/users/password', data)
}