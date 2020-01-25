<template>
    <v-container fill-height style="max-width: 450px;">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-alert class="mb-3" :value="isError" type="error">
                    아이디와 비밀번호를 확인해주세요
                </v-alert>
                <v-alert class="mb-3" :value="loginSuccess" type="success">
                    로그인이 완료되었습니다.
                </v-alert>
                <v-card>
                    <v-toolbar flat dark>
                        <v-toolbar-title>로그인</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                        <v-text-field
                                v-model="email"
                                label="이메일을 입력하세요"
                        />
                        <v-text-field
                                v-model="password"
                                type="password"
                                label="패스워드를 입력하세요"
                        />
                        <v-btn depressed block large color="primary" @click="login()">로그인</v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                email: null,
                password: null,
                allUsers: [
                    {id: 1, name: "first", email: "first@gmail.com", password: "123456"},
                    {id: 2, name: "second", email: "second@gmail.com", password: "123456"}
                ],
                isError: false,
                loginSuccess: false
            }
        },
        methods: {
            login() {
                let selectedUser = null
                this.allUsers.forEach(user => {
                    if (user.email === this.email) {
                        selectedUser = user
                    }
                })
                if (selectedUser === null) {
                    this.isError = true
                } else {
                    if (selectedUser.password !== this.password) {
                        this.isError = true
                    } else {
                        this.isError = false
                        this.loginSuccess = true;
                    }
                }
                console.log(this.email, this.password)
            }
        }
    }
</script>
