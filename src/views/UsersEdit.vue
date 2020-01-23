<template>
  <div>
    <h1>user edit</h1>
    <p>Edit할 유저 번호: {{ userId }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      userId() {
        return this.$route.params.id
      }
    },
  }
</script>
