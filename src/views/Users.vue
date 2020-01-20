<template>
  <div>
    <h1>Users</h1>
    <p>이 유저는 유저번호가 {{ userId }}입니다.</p>
    {{ $route.params.name }}
  </div>
</template>

<script>
  export default {
    computed: {
      userId() {
        return this.$route.params.id
      }
    },
    created() {
      console.log("route", this.$route)
    }
  }
</script>
