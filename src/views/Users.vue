<template>
  <div>
    <h1>Users</h1>
    <p>이 유저는 유저번호가 {{ userId }}입니다.</p>
    <p>{{ $route.params.name }}</p>
    <h2>{{ $route.query.group }}</h2>
    <h2>{{ $route.query.category }}</h2>
    <h2>이름: {{ $route.query.name }}</h2>
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
