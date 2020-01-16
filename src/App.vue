<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ count }}</h1>
    <button @click="count ++">추가</button>
    <HomeComponent/>
    <Status />
  </div>
</template>

<script>
  import HomeComponent from './Home'
  import Status from "./Status";

  export default {
    components: {
      Status,
      HomeComponent
    },
    data: () => ({
      title: "Hello",
      count: 1
    }),
  };
</script>
