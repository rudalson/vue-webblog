<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <p>{{ getDateAndTime(createdAt) }}</p>
    <v-btn @click="changeName()">이름 변경</v-btn>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
        />
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          @child="parents"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail"
import UserEdit from "./UserEdit"
import { dateFormat } from "../mixins/dateFormat"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data: () => ({
    name: "VueJS",
    address: 'Seoul',
    phone: '1234-5678',
    hasDog: true,
    createdAt: null,
  }),
  created() {
    this.createdAt = new Date()
  },
  methods: {
    parents (user) {
      // user = { name, address, phone, hasDog }
      this.name = user.name
      this.address = user.address
      this.phone = user.phone
      this.hasDog = user.hasDog
      console.log("부모가 받았어")
    }
  },
  mixins: [dateFormat]
}
</script>
