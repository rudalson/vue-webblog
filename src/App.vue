<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ count }}</h1>
    <button @click="count ++">추가</button>
    <HomeComponent></HomeComponent>
  </div>
</template>

<script>
  import HomeComponent from './Home'

  export default {
    components: {
      HomeComponent
    },
    data: () => ({
      title: "Hello",
      count: 1
    }),
  };
</script>
