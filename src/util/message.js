import { Message } from 'element-ui'

export function message(type, msg) {
    Message({
        type: type,
        message: msg,
        duration: 2000,
        offset: 150
    })
}