import axios from 'axios'
import qs from 'qs'

let service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 3000,
    withCredentials: true
})

export default service