<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ count }}</h1>
    <button @click="count ++">추가</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "Hello",
    count: 1
  }),
};
</script>
