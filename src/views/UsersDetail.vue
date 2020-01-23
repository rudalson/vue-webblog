<template>
  <div>
    <h1>user detail</h1>
    <p>유저 번호: {{ userId }}</p>
    <v-btn rounded color="primary" @click="edit">수정</v-btn>
  </div>
</template>

<script>
  export default {
    computed: {
      userId() {
        return this.$route.params.id
      }
    },
    methods: {
      edit() {
        this.$router.push({name: 'users-edit'})
      }
    }
  }
</script>
