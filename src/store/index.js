import Vuex from 'vuex'
import Vue from 'vue'
import permission from './modules/permission'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        permission,
        user
    },
    getters
})