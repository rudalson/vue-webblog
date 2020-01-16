<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <v-btn @click="changeName()">이름 변경</v-btn>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail :nameOfChild="name"/>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail"
import UserEdit from "./UserEdit"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data: () => ({
    name: "VueJS",
  }),
  methods: {
    changeName () {
      this.name = "React"
    }
  }
}
</script>
