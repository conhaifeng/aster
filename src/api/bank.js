import axios from '@/util/axios'

export function loanMoney(data) {
    return axios.post("/login", data)
}