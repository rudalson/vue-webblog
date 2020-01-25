<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
        >
            <v-list dense>
                <v-list-item link router :to="{name: 'home'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="isLogin === false" router :to="{name: 'login'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-contact-mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>로그인</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-else router :to="{name: 'mypage'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>MyPage</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link router :to="{name: 'users'}">
                    <v-list-item-action>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Users</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="indigo"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>Application</v-toolbar-title>

            <v-spacer/>
            <v-toolbar-items>
                <v-btn v-if="isLogin">웰컴</v-btn>
                <v-btn v-else roouter :to="{name: 'login'}">Log In</v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>

        <v-footer
                color="indigo"
                app
        >
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
        }),
        computed: {
            ...mapState(["isLogin"])
        },
        methods: {
            test() {
                alert("clicked")
            }
        }
    }
</script>
