import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: null,
        allUsers: [
            {id: 1, name: "first", email: "first@gmail.com", password: "123456"},
            {id: 2, name: "second", email: "second@gmail.com", password: "123456"}
        ],
        isLogin: false,
        isLoginError: false
    },
    mutations: {
        loginSuccess(state, payload) {
            state.isLogin = true
            state.isLoginError = false
            state.userInfo = payload;
        },
        loginError(state) {
            state.isLogin = false
            state.isLoginError = true
        },
        logout(state) {
            state.isLogin = false;
            state.isLoginError = false;
            state.userInfo = null;
        }
    },
    actions: {
        // 로그인 시도
        login({dispatch}, loginObj) {
            axios.post('https://reqres.in/api/login', loginObj)
                .then(res => {
                    // 성공시 토큰을 받음(user_id 값도 받아 올것임)
                    // 토큰을 헤더에 포함시켜서 유저 정보를 요청
                    let token = res.data.token;
                    localStorage.setItem("access_token", token);
                    dispatch("getMemberInfo")
                })
                .catch(() => {
                    alert('이메일과 비밀번호를 확인하세요')
                });
        },
        logout({commit}) {
            commit("logout");
            router.push({name: 'home'});
        },
        getMemberInfo({commit}) {
            let token = localStorage.getItem("access_token");
            let config = {
                headers: {
                    "access-token": token
                }
            }
            axios
                .get('https://reqres.in/api/users/2', config)
                .then(response => {
                    let userInfo = {
                        id: response.data.data.id,
                        first_name: response.data.data.first_name,
                        last_name: response.data.data.last_name,
                        avatar: response.data.data.avatar
                    }
                    commit('loginSuccess', userInfo);
                })
                .catch(() => {
                    commit("loginError");
                    alert('이메일과 비밀번호를 확인하세요.')
                })
        }
    },
    modules: {}
})
