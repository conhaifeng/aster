export const setStorage = (key, value) => {
    window.sessionStorage.setItem(key, value)
}

export const getStorage = (key) => {
    return window.sessionStorage.getItem(key)
}

export const removeStorage = (key) => {
    window.sessionStorage.removeItem(key)
}