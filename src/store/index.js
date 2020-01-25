import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allUsers: [
            {id: 1, name: "first", email: "first@gmail.com", password: "123456"},
            {id: 2, name: "second", email: "second@gmail.com", password: "123456"}
        ],
        isLogin: false,
        isLoginError: false
    },
    mutations: {
        loginSuccess(state) {
            state.isLogin = true
            state.isLoginError = false
        },
        loginError(state) {
            state.isLogin = false
            state.isLoginError = true
        }
    },
    actions: {
        // 로그인 시도
        login({state, commit}, loginObj) {
            let selectedUser = null
            state.allUsers.forEach(user => {
                if (user.email === loginObj.email) {
                    selectedUser = user
                }
            })
            if (selectedUser === null) {
                commit('loginError')
            } else {
                if (selectedUser.password !== loginObj.password) {
                    commit('loginError')
                } else {
                    commit('loginSuccess')
                }
            }
            console.log(loginObj)
        }
    },
    modules: {}
})
